import React from 'react';
import { Group, Badge } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useIdle } from '@asuikit/hooks';

const eventsCode = `
import { Badge } from '@asuikit/core';
import { useIdle } from '@asuikit/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: MantineDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
