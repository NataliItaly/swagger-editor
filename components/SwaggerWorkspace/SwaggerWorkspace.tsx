'use client';

import { useState } from 'react';
import SwaggerEditor from '@/components/SwaggerEditor/SwaggerEditor';
import SwaggerViewer from '@/components/SwaggerViewer/SwaggerViewer';
import type { SwaggerSchema } from '@/types/swagger';

export default function SwaggerWorkspace() {
  const [parsedSchema, setParsedSchema] = useState<SwaggerSchema | null>(null);
  return (
    <div>
      <SwaggerEditor schema={parsedSchema} onSchemaChange={setParsedSchema} />
      <SwaggerViewer schema={parsedSchema} />
    </div>
  );
}
