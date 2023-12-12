import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateInput } from '@asuikit/dates';
import { Box } from '@asuikit/core';

const code = `
import { DateInput } from '@asuikit/dates';

function Demo() {
  return (
    <DateInput
      label="Disabled"
      placeholder="Date input"
      disabled
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box maw={320} mx="auto">
      <DateInput
        value={value}
        onChange={setValue}
        label="Disabled"
        placeholder="Date input"
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
