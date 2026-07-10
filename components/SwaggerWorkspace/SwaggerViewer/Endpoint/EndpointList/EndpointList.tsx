import EndpointItem from '../EndpointItem/EndpointItem';
import type { Endpoint } from '@/types/endpoint';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../ui/accordion';
import EndpointDetails from '@/components/SwaggerWorkspace/SwaggerViewer/Endpoint/EndpointDetails/EndpointDetails';
import { useState } from 'react';

export type EndpointListProps = {
  endpoints: Endpoint[];
};

export default function EndpointList({ endpoints }: EndpointListProps) {
  const [opened, setOpened] = useState('');

  return (
    <Accordion
      type="single"
      collapsible
      value={opened}
      onValueChange={setOpened}
    >
      {endpoints.map((endpoint) => {
        const value = `${endpoint.method}-${endpoint.path}`;

        return (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>
              <EndpointItem endpoint={endpoint} />
            </AccordionTrigger>
            <AccordionContent className="px-4">
              {opened === value && <EndpointDetails endpoint={endpoint} />}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
