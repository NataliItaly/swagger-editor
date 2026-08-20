import type { Format } from '@/types/swagger';
import type { SaveStatus } from '@/types/save';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export type ToolbarProps = {
  format: Format;
  onConvertToJSON: () => void;
  onConvertToYAML: () => void;
  onSave: () => void;
  saveStatus: SaveStatus;
  isAuthenticated: boolean;
};

export default function Toolbar({
  format,
  onConvertToJSON,
  onConvertToYAML,
  onSave,
  saveStatus,
  isAuthenticated,
}: ToolbarProps) {
  const t = useTranslations('Toolbar');

  return (
    <div className="mb-5 py-5">
      <Button
        className="px-5 py-3 cursor-pointer"
        variant={format === 'json' ? 'default' : 'outline'}
        onClick={onConvertToJSON}
        disabled={format === 'json'}
      >
        {t('convertJson')}
      </Button>
      <Button
        className="px-5 py-3 cursor-pointer"
        variant={format === 'yaml' ? 'default' : 'outline'}
        onClick={onConvertToYAML}
        disabled={format === 'yaml'}
      >
        {t('convertYaml')}
      </Button>

      {isAuthenticated && (
        <Button
          className="px-5 py-3 cursor-pointer"
          variant="secondary"
          onClick={onSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'idle' && t('saveSchema')}
          {saveStatus === 'saving' && t('saving')}
          {saveStatus === 'saved' && t('saved')}
          {saveStatus === 'error' && t('saveFailed')}
        </Button>
      )}
    </div>
  );
}
