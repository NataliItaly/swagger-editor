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

export interface MediaType {
  schema?: {
    type?: string;
  };
  example?: unknown;
}

export interface Response {
  description?: string;
  content?: Record<string, MediaType>;
}

export type Responses = Record<string, Response>;

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
