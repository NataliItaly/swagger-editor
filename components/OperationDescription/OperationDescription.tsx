import type { Operation } from '@/types/endpoint';

export type OperationDescriptionProps = {
  operation: Operation;
};

export default function OperationDescription({
  operation,
}: OperationDescriptionProps) {
  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">Description:</h3>
      <p>{operation.description}</p>
    </section>
  );
}
