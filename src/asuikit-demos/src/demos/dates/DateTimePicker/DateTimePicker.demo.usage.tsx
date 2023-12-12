import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateTimePicker } from '@asuikit/dates';

const code = `
import { DateTimePicker } from '@asuikit/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
      popoverProps={{ withinPortal: true }}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
