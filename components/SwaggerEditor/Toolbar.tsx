import type { Format } from '@/types/swagger';
import { Button } from '@/components/ui/button';

export type ToolbarProps = {
  format: Format;
  onConvertToJSON: () => void;
  onConvertToYAML: () => void;
  onSave: () => void;
};

export default function Toolbar({
  format,
  onConvertToJSON,
  onConvertToYAML,
  onSave,
}: ToolbarProps) {
  return (
    <div className="mb-5">
      <button
        style={{ background: format === 'json' ? 'blue' : 'gray' }}
        onClick={onConvertToJSON}
        disabled={format === 'json'}
      >
        Convert to JSON
      </button>
      <button
        style={{ background: format === 'yaml' ? 'blue' : 'gray' }}
        onClick={onConvertToYAML}
        disabled={format === 'yaml'}
      >
        Convert to YAML
      </button>
      <button onClick={onSave}>Save Schema</button>
    </div>
  );
}
