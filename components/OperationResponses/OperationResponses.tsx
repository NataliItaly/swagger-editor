import type { Operation } from '@/types/endpoint';
import { getStatusColor } from '@/lib/getStausColor';
import ResponseItem from '../ResponseItem/ResponseItem';

export type OperationResponsesProps = {
  operation: Operation;
};

export default function OperationResponses({
  operation,
}: OperationResponsesProps) {
  return (
    <section className="px-4 py-2 fles flex-col gap-4">
      <h3 className="font-semibold">Responses:</h3>
      {Object.entries(operation.responses ?? {}).map(([status, response]) => (
        <ResponseItem key={status} status={status} response={response} />
      ))}
    </section>
  );
}
