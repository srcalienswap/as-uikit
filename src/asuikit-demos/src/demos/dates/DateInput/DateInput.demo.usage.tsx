import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateInput } from '@asuikit/dates';

const code = `
import { useState } from 'react';
import { DateInput } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
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
