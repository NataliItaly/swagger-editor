import type { Operation } from '@/types/endpoint';

export type OperationSummaryProps = {
  operation: Operation;
};

export default function OperationSummary({ operation }: OperationSummaryProps) {
  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">Summary:</h3>
      <p>{operation.summary}</p>
    </section>
  );
}
