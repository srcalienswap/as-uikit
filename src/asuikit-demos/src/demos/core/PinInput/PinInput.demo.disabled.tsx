import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PinInput, Group, Box } from '@asuikit/core';

const code = `
import { PinInput, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput disabled />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <PinInput disabled />
      </Group>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
