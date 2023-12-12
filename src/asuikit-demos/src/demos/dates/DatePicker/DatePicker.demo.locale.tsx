import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker locale="ru" />
    </Group>
  );
}

export const locale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
