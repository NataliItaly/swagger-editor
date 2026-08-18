'use client';

/* import { useState } from 'react';
import SwaggerEditor from '@/components/SwaggerWorkspace/SwaggerEditor/SwaggerEditor';
import SwaggerViewer from '@/components/SwaggerWorkspace/SwaggerViewer/SwaggerViewer';
import type { SwaggerSchema } from '@/types/swagger'; */
import SwaggerWorkspace from '@/components/SwaggerWorkspace/SwaggerWorkspace';

export default function SwaggerPage() {
  //const [parsedSchema, setParsedSchema] = useState<SwaggerSchema | null>(null);
  return <SwaggerWorkspace />;
}
{
  /* <div className="py-7 overflow-hidden ">
      <h2 className="w-full text-xl font-bold text-center mb-4">
        Swagger Workplace
      </h2>
      <div className="flex flex-col justify-center lg:flex-row w-full gap-6 p-5">
        <SwaggerEditor schema={parsedSchema} onSchemaChange={setParsedSchema} />
        <SwaggerViewer schema={parsedSchema} />
      </div>
    </div> */
}
