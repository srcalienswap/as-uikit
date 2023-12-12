import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { Calendar } from '@asuikit/dates';

const code = `
import { Group } from '@asuikit/core';
import { Calendar } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
