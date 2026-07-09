import type { Operation } from '@/types/endpoint';
import OperationSummary from '../OperationSummary/OperationSummary';
import OperationDescription from '../OperationDescription/OperationDescription';
import ParameterList from '../ParameterList/ParameterList';
import OperationResponses from '../OperationResponses/OperationResponses';
import RequestBody from '../RequestBody/RequestBody';
import { useState, useEffect } from 'react';

export type EndpointDetailsProps = {
  operation: Operation;
};

export default function EndpointDetails({ operation }: EndpointDetailsProps) {
  const [requestState, setRequestState] = useState({
    parameters: {},
    headers: {},
    body: JSON.stringify(
      Object.values(operation.requestBody?.content ?? {})[0]?.example ?? {},
      null,
      2,
    ),
  });

  return (
    <div>
      {operation.summary && <OperationSummary summary={operation.summary} />}
      {operation.description && (
        <OperationDescription description={operation.description} />
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
      {operation.parameters && (
        <ParameterList
          parameterList={operation.parameters}
          parameterValues={requestState.parameters}
          onParameterChange={(key, value) =>
            setRequestState((prev) => ({
              ...prev,
              parameters: { ...prev.parameters, [key]: value },
            }))
          }
        />
      )}
      {operation.responses && (
        <OperationResponses operationResponses={operation.responses} />
      )}
    </div>
  );
}
/**
 *  setParameterValues((prev) => ({
              ...prev,
              [key]: value,
            }))
 */
