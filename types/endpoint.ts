export type Operation = {
  summary?: string;
  description?: string;
  parameters?: unknown[];
  requestBody?: unknown;
  responses?: unknown;
};

export interface Endpoint {
  path: string;
  method: HttpMethod;
  operation: Operation;
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
