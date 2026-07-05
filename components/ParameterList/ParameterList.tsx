import type { Operation } from '@/types/endpoint';

export type { Operation } from '@/types/endpoint';

export type ParameterListProps = {
  operation: Operation;
};

export default function ParameterList({ operation }: ParameterListProps) {
  if (!operation.parameters) return null;
  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">ParameterList:</h3>
      <ul className="space-y-2">
        {operation.parameters.map((param) => (
          <li key={`${param.in}-${param.name}`} className="rounded border p-2">
            <div className="flex gap-2 items-center">
              <span className="font-medium">{param.name}</span>

              <span className="rounded bg-gray-200 px-2 py-0.5 text-xs">
                {param.in}
              </span>

              {param.required && (
                <span className="text-red-500 text-xs">required</span>
              )}
            </div>

            {param.description && (
              <p className="mt-1 text-sm text-gray-500">{param.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

//{JSON.stringify(operation.parameters, null, 2)}
