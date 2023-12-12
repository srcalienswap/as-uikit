import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PinInput, Group } from '@asuikit/core';

const code = `
import { PinInput, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}

export const number: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
