import type { ProxyResponse } from '@/types/proxy';

type ExecuteRequestProps = {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
};

export default async function executeRequest({
  url,
  method,
  headers,
  body,
}: ExecuteRequestProps): Promise<ProxyResponse> {
  const requestHeaders = {
    ...headers,
    ...(body && {
      'Content-Type': 'application/json',
    }),
  };

  const res = await fetch('/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      method: method.toUpperCase(),
      headers: requestHeaders,
      body,
    }),
  });

  const text = await res.text();

  const result: ProxyResponse = JSON.parse(text);
  if (!res.ok) {
    throw new Error(result.error ?? 'Request failed');
  }

  const historyRes = await fetch('/api/history', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: method.toUpperCase(),
      url,
      headers: requestHeaders,
      body: body ?? null,
      response: result.body,
    }),
  });

  if (!historyRes.ok) {
    console.error('Failed to save request history:', historyRes.status);
  }

  /* try {
    await fetch('/api/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method: method.toUpperCase(),
        url,
        headers: requestHeaders,
        body: body ?? null,
        response: result.body,
      }),
    });
  } catch (error) {
    console.error('Failed to save request history:', error);
  } */

  return result;
}
