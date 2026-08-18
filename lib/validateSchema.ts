import type { SwaggerSchema } from '@/types/swagger';
import SwaggerParser from '@apidevtools/swagger-parser';

export default async function validateSchema(schema: SwaggerSchema) {
  return SwaggerParser.validate(
    schema as Parameters<typeof SwaggerParser.validate>[0],
  );
}
