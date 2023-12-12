import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { YearPickerInput } from '@asuikit/dates';
import { Box } from '@asuikit/core';

const code = `
import { YearPickerInput } from '@asuikit/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      label="Disabled"
      placeholder="Pick year"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <YearPickerInput
        valueFormat="YY"
        type="multiple"
        label="Disabled"
        placeholder="Pick year"
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
