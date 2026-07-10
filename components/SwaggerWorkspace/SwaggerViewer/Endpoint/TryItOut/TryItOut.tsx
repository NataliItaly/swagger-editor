import { useState } from 'react';
import type { Endpoint } from '@/types/endpoint';
import ParameterList from '../ParameterList/ParameterList';
import RequestBody from '../RequestBody/RequestBody';
import { Button } from '@/components/ui/button';
import buildUrl from '@/lib/buildUrl';

export type TryItOutProps = {
  endpoint: Endpoint;
};

export default function TryItOut({ endpoint }: TryItOutProps) {
  const { operation, method, path } = endpoint;

  const [requestState, setRequestState] = useState({
    parameters: {},
    body: JSON.stringify(
      Object.values(operation.requestBody?.content ?? {})[0]?.example ?? {},
      null,
      2,
    ),
  });

  const [response, setResponse] = useState<{
    status: number;
    headers: Record<string, string>;
    body: string;
  } | null>(null);

  async function handleExecute() {
    const { url, headers } = buildUrl(path, requestState.parameters);
    console.log(url);

    try {
      const hasBody = !['get', 'delete', 'head'].includes(method);

      const res = await fetch(url, {
        method: method.toUpperCase(),
        headers: headers,
        body: hasBody && {
          'Content-Type': 'application/json',
        }
          ? requestState.body
          : undefined,
      });

      const body = await res.text();

      setResponse({
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        body,
      });
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
          parameterList={operation.parameters ?? []}
          parameterValues={requestState.parameters}
          onParameterChange={(key, value) =>
            setRequestState((prev) => ({
              ...prev,
              parameters: { ...prev.parameters, [key]: value },
            }))
          }
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

      {response && (
        <div className="mt-6 rounded border p-4">
          <h3 className="font-semibold">Response</h3>

          <p>Status: {response.status}</p>

          <h4 className="mt-4 font-medium">Headers</h4>

          <pre>{JSON.stringify(response.headers, null, 2)}</pre>

          <h4 className="mt-4 font-medium">Body</h4>

          <pre>
            {(() => {
              try {
                return JSON.stringify(JSON.parse(response.body), null, 2);
              } catch {
                return response.body;
              }
            })()}
          </pre>
        </div>
      )}
    </>
  );
}
