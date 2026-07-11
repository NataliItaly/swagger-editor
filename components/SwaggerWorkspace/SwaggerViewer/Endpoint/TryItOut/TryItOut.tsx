import { useState } from 'react';
import type { Endpoint } from '@/types/endpoint';
import type { ProxyResponse } from '@/types/proxy';
import ParameterList from '../ParameterList/ParameterList';
import RequestBody from '../RequestBody/RequestBody';
import ResponseViewer from '../ResponseViewer/ResponeseViewer';
import { Button } from '@/components/ui/button';
import buildRequestData from '@/lib/buildRequestData';
import isValidJson from '@/lib/isValidJson';
import executeRequest from '@/lib/executeRequest';

export type TryItOutProps = {
  endpoint: Endpoint;
  serverUrl: string;
};

export default function TryItOut({ endpoint, serverUrl }: TryItOutProps) {
  const { operation, method, path } = endpoint;

  const [requestState, setRequestState] = useState({
    parameters: {},
    body: JSON.stringify(
      Object.values(operation.requestBody?.content ?? {})[0]?.example ?? {},
      null,
      2,
    ),
  });

  const [response, setResponse] = useState<ProxyResponse | null>(null);

  async function handleExecute() {
    console.log('requestState', requestState);
    const { url, headers } = buildRequestData(
      serverUrl,
      path,
      requestState.parameters,
    );

    const hasBody = !['get', 'delete', 'head'].includes(method);

    if (hasBody && !isValidJson(requestState.body)) {
      setResponse({
        status: 0,
        headers: {},
        body: 'Request body contains invalid JSON',
      });

      return;
    }
    try {
      const result = await executeRequest({
        url,
        method,
        headers,
        body: hasBody ? requestState.body : undefined,
      });
      console.log('HANDLE RESULT', result);
      setResponse(result);
    } catch (err) {
      console.error(err);
      setResponse({
        status: 0,
        headers: {},
        body: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  }

  return (
    <>
      {operation.parameters && (
        <ParameterList
          parameterList={operation.parameters}
          parameterValues={requestState.parameters}
          onParameterChange={(key, value) => {
            console.log('TryItOut:', key, value);
            setRequestState((prev) => ({
              ...prev,
              parameters: { ...prev.parameters, [key]: value },
            }));
          }}
        />
      )}

      {operation.requestBody && (
        <RequestBody
          requestBody={operation.requestBody}
          bodyValue={requestState.body}
          onBodyChange={(value) =>
            setRequestState((prev) => ({ ...prev, body: value }))
          }
        />
      )}

      <Button
        className="px-5 py-3 m-2 border-gray-500 cursor-pointer"
        variant="default"
        onClick={handleExecute}
      >
        Execute
      </Button>

      <ResponseViewer response={response} />
    </>
  );
}
