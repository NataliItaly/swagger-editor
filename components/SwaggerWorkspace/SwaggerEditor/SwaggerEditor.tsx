'use client';

import Editor, { type OnMount } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import * as yaml from 'js-yaml';
import { useState, useEffect } from 'react';
import type { Format, SwaggerSchema } from '@/types/swagger';
import type { ValidationResult } from '@/lib/getValidationMessage';
import type { SaveStatus } from '@/types/save';
import parseSchema from '@/lib/parseSchema';
import detectFormat from '@/lib/detectFormat';
import validateSchema from '@/lib/validateSchema';
import Toolbar from './Toolbar';
import ValidationMessage from './ValidationMessage';
import getValidationMessage from '@/lib/getValidationMessage';
import loadSchema from '@/lib/loadSchema';
import saveSchema from '@/lib/saveSchema';
import { supabase } from '@/lib/supabase';

const VALIDATION_DELAY = 1000;

type SwaggerEditorProps = {
  schema: SwaggerSchema | null;
  onSchemaChange: (schema: SwaggerSchema | null) => void;
};

export default function SwaggerEditor({
  schema,
  onSchemaChange,
}: SwaggerEditorProps) {
  const { resolvedTheme } = useTheme();

  const handleEditorMount: OnMount = (editor, monaco) => {
    monaco.editor.defineTheme('swagger-light', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#111827',
        'editorLineNumber.foreground': '#9ca3af',
        'editorLineNumber.activeForeground': '#374151',
        'editorCursor.foreground': '#7e22ce',
        'editor.selectionBackground': '#e9d5ff',
        'editor.inactiveSelectionBackground': '#f3f4f6',
        'editor.lineHighlightBackground': '#f9fafb',
      },
    });

    monaco.editor.defineTheme('swagger-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#111827',
        'editor.foreground': '#f9fafb',
        'editorLineNumber.foreground': '#6b7280',
        'editorLineNumber.activeForeground': '#d1d5db',
        'editorCursor.foreground': '#a855f7',
        'editor.selectionBackground': '#581c87',
        'editor.inactiveSelectionBackground': '#374151',
        'editor.lineHighlightBackground': '#1f2937',
      },
    });

    monaco.editor.setTheme(
      resolvedTheme === 'dark' ? 'swagger-dark' : 'swagger-light',
    );
  };

  const [editorValue, setEditorValue] = useState(
    `
      openapi: 3.0.0
      servers:
        - url: https://petstore.swagger.io/v2
      info:
        title: My API
        version: 1.0.0
      paths:
        /pet/{petId}:
          get:
            parameters:
              - name: petId
                in: path
                required: true
                schema:
                  type: integer

            responses:
              "200":
                description: OK
          post:
              summary: Create pet
              responses:
                "201":
                  description: Created

        /users/{userId}:
          get:
            summary: Get users
            responses:
              "505":
                description: OK
    `,
  );
  const [format, setFormat] = useState<Format>('yaml');

  const [validationError, setValidationError] =
    useState<ValidationResult | null>(null);

  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    loadSchema().then((schema) => {
      if (schema) {
        setEditorValue(schema);
      }
    });
  }, []);

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

  async function handleSave() {
    try {
      setSaveStatus('saving');

      await saveSchema(editorValue);

      setSaveStatus('saved');

      setTimeout(() => {
        setSaveStatus('idle');
      }, 2000);
    } catch (err) {
      setSaveStatus('error');
      console.error('Failed to save schema:', err);

      setTimeout(() => {
        setSaveStatus('idle');
      }, 3000);
    }
  }

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsAuthenticated(!!user);
    }

    checkUser();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const format = detectFormat(editorValue);
      setFormat(format);

      let parsed: SwaggerSchema;

      try {
        parsed = parseSchema(editorValue, format);
      } catch (e) {
        onSchemaChange(null);

        if (e instanceof Error) {
          setValidationError(getValidationMessage(e));
        }

        return;
      }

      onSchemaChange(parsed);

      try {
        await validateSchema(parsed);
        setValidationError(null);
      } catch (e) {
        if (e instanceof Error) {
          setValidationError(getValidationMessage(e));
        }
      }
    }, VALIDATION_DELAY);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [editorValue, onSchemaChange]);

  return (
    <div className="flex-1 lg:flex-1/2 lg:max-w-1/2">
      <Toolbar
        format={format}
        onConvertToJSON={switchToJSON}
        onConvertToYAML={switchToYAML}
        onSave={handleSave}
        saveStatus={saveStatus}
        isAuthenticated={isAuthenticated}
      />
      <Editor
        className="h-96 mb-5"
        language={format}
        value={editorValue}
        onChange={handleChange}
        onMount={handleEditorMount}
        theme={resolvedTheme === 'dark' ? 'swagger-dark' : 'swagger-light'}
      />
      {validationError && <ValidationMessage validation={validationError} />}
    </div>
  );
}
/**
 * summary: Get pets
            description: Returns all pets
            requestBody:
              description: New pet
              required: true

              content:
                application/json:
                  schema:
                    type: object

                  example:
                    name: Cat
                    age: 2
            responses:
              "200":
                description: OK
                content:
                  application/json:
                    schema:
                      type: array
            parameters:
              - name: limit
                in: query
                required: false
                description: Maximum number of pets
                schema:
                  type: integer
              - name: offset
                in: query
                required: false
                schema:
                  type: integer

              - name: apiKey
                in: header
                required: true
                schema:
                  type: string

              - name: petId
                in: path
                required: true
                schema:
                  type: integer
 */
