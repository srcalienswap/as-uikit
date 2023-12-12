import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

const code = `
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideWeekdays />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideWeekdays />
    </Group>
  );
}

export const hideWeekdays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
