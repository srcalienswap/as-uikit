import React from 'react';
import { Group, Badge } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useIdle } from '@asuikit/hooks';

const code = `
import { Badge } from '@asuikit/core';
import { useIdle } from '@asuikit/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
