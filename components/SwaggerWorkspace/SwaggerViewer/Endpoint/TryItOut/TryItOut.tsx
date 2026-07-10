import { useState } from 'react';
import type { Operation } from '@/types/endpoint';
import ParameterList from '../ParameterList/ParameterList';
import RequestBody from '../RequestBody/RequestBody';
import { Button } from '@/components/ui/button';

export type TryItOutProps = {
  operation: Operation;
};

export default function TryItOut({ operation }: TryItOutProps) {
  const [requestState, setRequestState] = useState({
    parameters: {},
    headers: {},
    body: JSON.stringify(
      Object.values(operation.requestBody?.content ?? {})[0]?.example ?? {},
      null,
      2,
    ),
  });

  async function handleExecute() {
    console.log(requestState);
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
