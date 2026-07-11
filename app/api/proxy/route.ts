import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { url, method, headers, body } = await request.json();
  console.log('ROUTE', {
    url,
    method,
    headers,
    body,
  });
  try {
    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    const text = await response.text();
    console.log('STATUS', response.status);
    console.log('BODY', text);
    return NextResponse.json({
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body: text,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
      },
    );
  }
}
