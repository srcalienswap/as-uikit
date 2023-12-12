import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DatePickerInput } from '@asuikit/dates';

const code = `
import { DatePickerInput } from '@asuikit/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
