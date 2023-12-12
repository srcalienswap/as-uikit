import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PinInput, Group } from '@asuikit/core';

const code = `
import { PinInput, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}

export const regexp: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
