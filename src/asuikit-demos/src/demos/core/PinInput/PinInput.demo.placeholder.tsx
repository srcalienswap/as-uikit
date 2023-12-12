import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PinInput, Group } from '@asuikit/core';

const code = `
import { PinInput, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
