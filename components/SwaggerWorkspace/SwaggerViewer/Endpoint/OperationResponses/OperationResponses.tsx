import type { Responses } from '@/types/endpoint';
import ResponseItem from '../ResponseItem/ResponseItem';
import { useTranslations } from 'next-intl';

export type OperationResponsesProps = {
  operationResponses: Responses;
};

export default function OperationResponses({
  operationResponses,
}: OperationResponsesProps) {
  const t = useTranslations('OperationResponses');

  return (
    <section className="px-4 py-2 fles flex-col gap-4">
      <h3 className="font-semibold">{t('responses')}:</h3>
      {Object.entries(operationResponses ?? {}).map(([status, response]) => (
        <ResponseItem key={status} status={status} response={response} />
      ))}
    </section>
  );
}
