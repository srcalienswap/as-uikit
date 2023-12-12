import React from 'react';
import { Group, Badge } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useIdle } from '@asuikit/hooks';

const initialStateCode = `
import { Badge } from '@asuikit/core';
import { useIdle } from '@asuikit/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: MantineDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
