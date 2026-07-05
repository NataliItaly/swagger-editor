import * as yaml from 'js-yaml';
import type { Format } from '@/types/swagger';

export default function parseSchema(text: string, format: Format) {
  return format === 'yaml' ? yaml.load(text) : JSON.parse(text);
}
