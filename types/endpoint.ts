export interface Endpoint {
  path: string;
  method: HttpMethod;
  summary?: string;
  description?: string;
  parameters?: unknown[];
  requestBody?: unknown;
  responses?: unknown;
}

export const HTTP_METHODS = [
  'get',
  'post',
  'put',
  'delete',
  'patch',
  'head',
  'options',
  'trace',
] as const;

export type HttpMethod = (typeof HTTP_METHODS)[number];
