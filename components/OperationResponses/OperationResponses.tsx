import type { Operation } from '@/types/endpoint';
import { getStatusColor } from '@/lib/getStausColor';

export type OperationResponsesProps = {
  operation: Operation;
};

export default function OperationResponses({
  operation,
}: OperationResponsesProps) {
  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">Responses:</h3>
      {Object.entries(operation.responses ?? {}).map(([status, response]) => (
        <div key={status}>
          <strong className={`${getStatusColor(status)}`}>{status}</strong>
          <p>{response.description}</p>
        </div>
      ))}
    </section>
  );
}
