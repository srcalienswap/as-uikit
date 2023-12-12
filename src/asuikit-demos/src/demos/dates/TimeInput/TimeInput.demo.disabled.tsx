import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { TimeInput } from '@asuikit/dates';
import { Box } from '@asuikit/core';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@asuikit/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TimeInput disabled />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
