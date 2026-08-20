import { useTranslations } from 'next-intl';

export type OperationDescriptionProps = {
  description: string;
};

export default function OperationDescription({
  description,
}: OperationDescriptionProps) {
  const t = useTranslations('OperationDescription');

  return (
    <section className="px-4 py-2 flex gap-4">
      <h3 className="font-semibold">{t('description')}:</h3>
      <p>{description}</p>
    </section>
  );
}
