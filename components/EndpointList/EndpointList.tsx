import EndpointItem from '../EndpointItem/EndpointItem';
import type { Endpoint } from '@/types/endpoint';

export type EndpointListProps = {
  endpoints: Endpoint[];
};

export default function EndpointList({ endpoints }: EndpointListProps) {
  return (
    <ul>
      {endpoints.map((endpoint) => (
        <EndpointItem
          key={`${endpoint.method}-${endpoint.path}`}
          endpoint={endpoint}
        />
      ))}
    </ul>
  );
}
