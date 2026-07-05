import type { SwaggerSchema } from '@/types/swagger';
import type { Endpoint } from '@/types/endpoint';
import getEndpoints from '@/lib/getEndpoints';

export type SwaggerViewerProps = {
  schema: SwaggerSchema | null;
};

export default function SwaggerViewer({ schema }: SwaggerViewerProps) {
  if (!schema) {
    return (
      <div className="w-lg h-28 bg-indigo-500 p-4">
        <p>No schema loaded.</p>
      </div>
    );
  }

  const endpoints: Endpoint[] = getEndpoints(schema);

  //const paths = Object.keys(schema.paths ?? {});

  return (
    <div className="w-lg h-28 bg-indigo-500 p-4">
      {endpoints.length === 0 ? (
        <p>No endpoints</p>
      ) : (
        <ul>
          {endpoints.map((endpoint) => (
            <li key={`${endpoint.method}-${endpoint.path}`}>
              {endpoint.method.toUpperCase()} {endpoint.path}
            </li>
          ))}
        </ul>
      )}
      <pre>{JSON.stringify(schema.paths ?? {}, null, 2)}</pre>
    </div>
  );
}
