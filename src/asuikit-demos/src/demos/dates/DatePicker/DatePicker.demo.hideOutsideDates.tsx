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
      <DatePicker hideOutsideDates />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideOutsideDates />
    </Group>
  );
}

export const hideOutsideDates: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
