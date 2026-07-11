import type { ProxyResponse } from '@/types/proxy';

export type ResponseViewerProps = {
  response: ProxyResponse | null;
};

export default function ResponseViewer({ response }: ResponseViewerProps) {
  if (!response) return null;

  const formattedBody = (() => {
    try {
      return JSON.stringify(JSON.parse(response.body), null, 2);
    } catch {
      return response.body;
    }
  })();

  return (
    <section className="mt-6 rounded border p-4 bg-yellow-400">
      <h3 className="font-semibold text-lg">Response</h3>

      <div className="mt-3">
        <span className="font-medium">Status:</span> {response.status}
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Headers</h4>

        <pre className="mt-2 rounded bg-gray-100 dark:bg-gray-800 p-3 overflow-auto text-sm">
          {JSON.stringify(response.headers, null, 2)}
        </pre>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Body</h4>

        <pre className="mt-2 rounded bg-gray-100 dark:bg-gray-800 p-3 overflow-auto text-sm">
          {formattedBody}
        </pre>
      </div>
    </section>
  );
}
