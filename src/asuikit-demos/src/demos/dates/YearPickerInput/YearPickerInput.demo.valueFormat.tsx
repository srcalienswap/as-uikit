import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { YearPickerInput } from '@asuikit/dates';

const code = `
import { YearPickerInput } from '@asuikit/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
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
