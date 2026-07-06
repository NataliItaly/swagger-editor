export type Format = 'json' | 'yaml';

export interface PathItem {
  [method: string]: unknown;
}

export interface SwaggerSchema {
  openapi?: string;

  info?: {
    title?: string;
    version?: string;
  };

  paths?: Record<string, PathItem>;
}
