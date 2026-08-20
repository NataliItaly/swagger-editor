import type { Parameter } from '@/types/endpoint';
import ParameterItem from './ParameterItem';
import { useTranslations } from 'next-intl';

export type ParameterListProps = {
  parameterList: Parameter[];
  parameterValues: Record<string, string>;
  onParameterChange: (key: string, value: string) => void;
};

export default function ParameterList({
  parameterList,
  parameterValues,
  onParameterChange,
}: ParameterListProps) {
  const t = useTranslations('ParameterList');

  return (
    <section className="px-4 py-2">
      <h3 className="font-semibold">{t('parameterList')}:</h3>
      <ul className="space-y-2">
        {parameterList.map((param) => {
          const key = `${param.in}:${param.name}`;

          return (
            <ParameterItem
              key={`${param.in}-${param.name}`}
              param={param}
              value={parameterValues[key] ?? ''}
              onChange={(value) => {
                onParameterChange(key, value);
              }}
            />
          );
        })}
      </ul>
    </section>
  );
}
