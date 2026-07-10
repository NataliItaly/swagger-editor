import type { Operation } from '@/types/endpoint';
import OperationSummary from '../OperationSummary/OperationSummary';
import OperationDescription from '../OperationDescription/OperationDescription';
import ParameterList from '../ParameterList/ParameterList';
import OperationResponses from '../OperationResponses/OperationResponses';
import RequestBody from '../RequestBody/RequestBody';
import TryItOut from '../TryItOut/TryItOut';
import { useState, useEffect } from 'react';

export type EndpointDetailsProps = {
  operation: Operation;
};

export default function EndpointDetails({ operation }: EndpointDetailsProps) {
  return (
    <div>
      {operation.summary && <OperationSummary summary={operation.summary} />}

      {operation.description && (
        <OperationDescription description={operation.description} />
      )}

      {operation.responses && (
        <OperationResponses operationResponses={operation.responses} />
      )}

      <TryItOut operation={operation} />
    </div>
  );
}

/**
 *  {operation.requestBody && (
        <RequestBody requestBody={operation.requestBody} />
      )}
      {operation.parameters && (
        <ParameterList parameterList={operation.parameters} />
      )}
 */
