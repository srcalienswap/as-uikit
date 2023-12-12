import dayjs from 'dayjs';
import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateInput } from '@asuikit/dates';

const code = `
import { DateInput } from '@asuikit/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
