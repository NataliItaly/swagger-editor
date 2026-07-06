import type { RequestBody } from '@/types/endpoint';

export type RequestBodyProps = {
  requestBody: RequestBody;
};

export default function RequestBody({ requestBody }: RequestBodyProps) {
  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">Request Body:</h3>
      {Object.entries(requestBody.content ?? {}).map(([contentType, media]) => (
        <div key={contentType}>
          <strong>{contentType}</strong>
        </div>
      ))}
    </section>
  );
}
