import type { Operation } from '@/types/endpoint';
import OperationSummary from '../OperationSummary/OperationSummary';
import OperationDescription from '../OperationDescription/OperationDescription';
import ParameterList from '../ParameterList/ParameterList';
import OperationResponses from '../OperationResponses/OperationResponses';
import RequestBody from '../RequestBody/RequestBody';
import { useState } from 'react';

export type EndpointDetailsProps = {
  operation: Operation;
};

export default function EndpointDetails({ operation }: EndpointDetailsProps) {
  const [parameterValues, setParameterValues] = useState<
    Record<string, string>
  >({});

  return (
    <div>
      {operation.summary && <OperationSummary summary={operation.summary} />}
      {operation.description && (
        <OperationDescription description={operation.description} />
      )}

      {operation.requestBody && (
        <RequestBody requestBody={operation.requestBody} />
      )}
      {operation.parameters && (
        <ParameterList
          parameterList={operation.parameters}
          parameterValues={parameterValues}
          onParameterChange={(key, value) =>
            setParameterValues((prev) => ({
              ...prev,
              [key]: value,
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
