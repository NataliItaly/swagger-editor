import type { Endpoint } from '@/types/endpoint';

export type EndpointItemProps = {
  endpoint: Endpoint;
};

export default function EndpointItem({ endpoint }: EndpointItemProps) {
  return (
    <li>
      {endpoint.method.toUpperCase()} {endpoint.path}
    </li>
  );
}
