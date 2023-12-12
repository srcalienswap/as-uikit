import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@asuikit/dates';

const code = `
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@asuikit/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
