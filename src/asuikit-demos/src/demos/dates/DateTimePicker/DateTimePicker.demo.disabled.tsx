import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateTimePicker } from '@asuikit/dates';
import { Box } from '@asuikit/core';

const code = `
import { DateTimePicker } from '@asuikit/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Disabled"
      placeholder="Pick date and time"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DateTimePicker
        label="Disabled"
        placeholder="Pick date and time"
        popoverProps={{ withinPortal: true }}
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
