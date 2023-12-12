import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { MonthPicker } from '@asuikit/dates';

const code = `
import { Group } from '@asuikit/core';
import { MonthPicker } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
