import type { SwaggerSchema } from '@/types/swagger';
import type { Endpoint } from '@/types/endpoint';
import getEndpoints from '@/lib/getEndpoints';
import EndpointList from '../EndpointList/EndpointList';

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

  return (
    <div className="w-lg h-fit h-28 p-2">
      {endpoints.length === 0 ? (
        <p>No endpoints</p>
      ) : (
        <EndpointList endpoints={endpoints} />
      )}
    </div>
  );
}
