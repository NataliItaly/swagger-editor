import type { Operation } from '@/types/endpoint';
import OperationSummary from '../OperationSummary/OperationSummary';
import OperationDescription from '../OperationDescription/OperationDescription';
import ParameterList from '../ParameterList/ParameterList';
import OperationResponses from '../OperationResponses/OperationResponses';

export type EndpointDetailsProps = {
  operation: Operation;
};

export default function EndpointDetails({ operation }: EndpointDetailsProps) {
  return (
    <div>
      <div>
        {operation.summary && <OperationSummary operation={operation} />}
      </div>
      <div>
        {operation.description && (
          <OperationDescription operation={operation} />
        )}
      </div>
      <div>
        {operation.parameters && <ParameterList operation={operation} />}
      </div>
      <div>
        {operation.responses && <OperationResponses operation={operation} />}
      </div>
    </div>
  );
}
