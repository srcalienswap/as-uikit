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
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}

export const weekendDays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
