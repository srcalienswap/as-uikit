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
      <DatePicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}

export const listFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
