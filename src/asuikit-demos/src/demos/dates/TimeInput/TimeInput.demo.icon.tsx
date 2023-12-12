import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@asuikit/dates';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@asuikit/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
