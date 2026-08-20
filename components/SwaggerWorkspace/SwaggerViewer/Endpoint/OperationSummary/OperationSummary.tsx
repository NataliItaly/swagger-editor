import { useTranslations } from 'next-intl';

export type OperationSummaryProps = {
  summary: string;
};

export default function OperationSummary({ summary }: OperationSummaryProps) {
  const t = useTranslations('Summary');

  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">{t('summary')}:</h3>
      <p>{summary}</p>
    </section>
  );
}
