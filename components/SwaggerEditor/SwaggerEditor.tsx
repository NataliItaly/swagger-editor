'use client';

import Editor from '@monaco-editor/react';
import * as yaml from 'js-yaml';
import { useState, useEffect } from 'react';
import type { Format, SwaggerSchema } from '@/types/swagger';
import parseSchema from '@/lib/parseSchema';
import detectFormat from '@/lib/detectFormat';
import validateSchema from '@/lib/validateSchema';
import Toolbar from './Toolbar';
import ValidationMessage from './ValidationMessage';
import getValidationMessage from '@/lib/getValidationMessage';
import type { ValidationResult } from '@/lib/getValidationMessage';

const VALIDATION_DELAY = 1000;

type SwaggerEditorProps = {
  schema: SwaggerSchema | null;
  onSchemaChange: (schema: SwaggerSchema | null) => void;
};
/*
          summary: Get pets
            responses:
              "200":
                description: OK
        post:
            summary: Create pet
            responses:
              "201":
                description: Created

        /users:
          get:
            summary: Get users
            responses:
              "201":
                description: OK */
export default function SwaggerEditor({
  schema,
  onSchemaChange,
}: SwaggerEditorProps) {
  const [editorValue, setEditorValue] = useState(
    `
      openapi: 3.0.0
      info:
        title: My API
        version: 1.0.0
      paths:
        /pets:
          get:


    `,
  );
  const [format, setFormat] = useState<Format>('yaml');
  const [validationError, setValidationError] =
    useState<ValidationResult | null>(null);

  function handleChange(value: string | undefined) {
    const text = value ?? '';
    setEditorValue(text);
  }

  function switchToJSON() {
    if (!schema) return;
    setEditorValue(JSON.stringify(schema, null, 2));
    setFormat('json');
  }

  function switchToYAML() {
    if (!schema) return;
    setEditorValue(yaml.dump(schema));
    setFormat('yaml');
  }

  function handleSave() {
    console.log('Save schema', schema);
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      console.log('Validating');
      const format = detectFormat(editorValue);
      setFormat(format);

      let parsed: SwaggerSchema;

      try {
        parsed = parseSchema(editorValue, format);
      } catch (e) {
        onSchemaChange(null);
        if (e instanceof Error) {
          setValidationError(getValidationMessage(e));
          console.log(e.message);
        }

        return;
      }
      onSchemaChange(parsed);

      try {
        await validateSchema(parsed);
        setValidationError(null);
        console.log('VALID');
      } catch (e) {
        if (e instanceof Error) {
          setValidationError(getValidationMessage(e));
        }
      }
    }, VALIDATION_DELAY);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [editorValue]);

  return (
    <div>
      <Toolbar
        format={format}
        onConvertToJSON={switchToJSON}
        onConvertToYAML={switchToYAML}
        onSave={handleSave}
      />
      <Editor
        height="200px"
        language={format}
        value={editorValue}
        onChange={handleChange}
      />
      {validationError && <ValidationMessage validation={validationError} />}
    </div>
  );
}
