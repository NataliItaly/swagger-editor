import EndpointItem from '../EndpointItem/EndpointItem';
import type { Endpoint } from '@/types/endpoint';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import EndpointDetails from '@/components/EndpointDetails/EndpointDetails';

export type EndpointListProps = {
  endpoints: Endpoint[];
};

export default function EndpointList({ endpoints }: EndpointListProps) {
  return (
    <Accordion type="single" collapsible>
      {endpoints.map((endpoint) => (
        <AccordionItem
          key={`${endpoint.method}-${endpoint.path}`}
          value={`${endpoint.method}-${endpoint.path}`}
        >
          <AccordionTrigger>
            <EndpointItem endpoint={endpoint} />
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <EndpointDetails operation={endpoint.operation} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
