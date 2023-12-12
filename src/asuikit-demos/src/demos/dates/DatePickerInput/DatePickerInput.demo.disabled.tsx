import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DatePickerInput } from '@asuikit/dates';
import { Box } from '@asuikit/core';

const code = `
import { DatePickerInput } from '@asuikit/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DatePickerInput
        valueFormat="YYYY MMM DD"
        type="multiple"
        label="Disabled"
        placeholder="Pick date"
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
