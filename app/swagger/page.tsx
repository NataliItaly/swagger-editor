'use client';

import { useState } from 'react';
import SwaggerEditor from '@/components/SwaggerWorkspace/SwaggerEditor/SwaggerEditor';
import SwaggerViewer from '@/components/SwaggerWorkspace/SwaggerViewer/SwaggerViewer';
import type { SwaggerSchema } from '@/types/swagger';

export default function SwaggerWorkspace() {
  const [parsedSchema, setParsedSchema] = useState<SwaggerSchema | null>(null);
  return (
    <div className="py-7">
      <h2 className="w-full text-center">Swagger Workplace</h2>
      <div className="flex flex-col lg:flex-row w-full gap-6 p-5 bg-white text-gray-900 dark:text-white dark:bg-gray-800">
        <SwaggerEditor schema={parsedSchema} onSchemaChange={setParsedSchema} />
        <SwaggerViewer schema={parsedSchema} />
      </div>
    </div>
  );
}
