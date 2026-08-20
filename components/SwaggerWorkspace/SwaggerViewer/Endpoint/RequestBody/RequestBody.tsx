import type { RequestBody } from '@/types/endpoint';
import { useTranslations } from 'next-intl';

export type RequestBodyProps = {
  requestBody: RequestBody;
  bodyValue?: string;
  onBodyChange?: (value: string) => void;
};

export default function RequestBody({
  requestBody,
  bodyValue,
  onBodyChange,
}: RequestBodyProps) {
  const t = useTranslations('RequestBody');

  return (
    <section className="px-4 py-2 flex flex-col gap-4">
      <h3 className="font-semibold">{t('requestBody')}:</h3>
      {requestBody.description && (
        <div className="pl-5">
          <h4>{t('description')}:</h4>
          <p>{requestBody.description}</p>
        </div>
      )}
      {requestBody.required && (
        <div className="pl-5">
          <h4>{t('required')}:</h4>
          <p>{requestBody.required ? 'yes' : 'no'}</p>
        </div>
      )}
      {requestBody.content && (
        <>
          <div className="pl-5">
            <h4>{t('content')}:</h4>
            <p>{Object.keys(requestBody.content)[0]}</p>
          </div>
          {Object.entries(requestBody.content ?? {}).map(
            ([contentType, media]) => (
              <div key={contentType}>
                <h4>{contentType}</h4>
                <div className="pl-5 flex flex-col gap-4">
                  {media.schema && (
                    <div className="pl-4">
                      <h5 className="font-medium">{t('schema')}</h5>

                      <pre>{JSON.stringify(media.schema, null, 2)}</pre>
                    </div>
                  )}

                  {media.example && (
                    <div className="pl-4">
                      <h5 className="font-medium">{t('example')}</h5>
                      {onBodyChange && (
                        <textarea
                          value={bodyValue}
                          onChange={(e) => onBodyChange(e.target.value)}
                          className="w-full rounded border p-2 font-mono"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </>
      )}
    </section>
  );
}
