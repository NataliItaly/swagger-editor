import { useState } from 'react';
import type { Endpoint } from '@/types/endpoint';
import ParameterList from '../ParameterList/ParameterList';
import RequestBody from '../RequestBody/RequestBody';
import { Button } from '@/components/ui/button';

export type TryItOutProps = {
  endpoint: Endpoint;
};

export default function TryItOut({ endpoint }: TryItOutProps) {
  const { operation, method, path } = endpoint;

  const [requestState, setRequestState] = useState({
    parameters: {},
    headers: {},
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

  function buildUrl(path: string, parameters: Record<string, string>) {
    let url = path;

    const query = new URLSearchParams();

    Object.entries(parameters).forEach(([key, value]) => {
      const [location, name] = key.split(':');

      if (location === 'path') {
        url = url.replace(`{${name}}`, value);
      }

      if (location === 'query' && value.trim() !== '') {
        query.append(name, value);
      }
    });

    const queryString = query.toString();

    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  }

  async function handleExecute() {
    console.log(requestState);
    const builded = buildUrl(path, requestState.parameters);
    console.log(builded);
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
    </>
  );
}
