export type Operation = {
  summary?: string;
  description?: string;
  parameters?: Parameter[];
  requestBody?: unknown;
  responses?: Responses;
};

export interface Parameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  required?: boolean;
  description: string;
  schema?: {
    type?: string;
  };
}

export interface Responses {
  description: string;
}

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
