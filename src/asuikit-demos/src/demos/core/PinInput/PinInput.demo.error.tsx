import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PinInput, Group } from '@asuikit/core';

const code = `
import { PinInput, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}

export const error: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
