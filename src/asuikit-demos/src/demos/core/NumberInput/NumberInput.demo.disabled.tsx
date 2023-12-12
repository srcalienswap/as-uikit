import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Box, NumberInput } from '@asuikit/core';

const code = `
import { NumberInput } from '@asuikit/core';

function Demo() {
  return <NumberInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NumberInput label="Disabled" placeholder="Your age" disabled value={20} />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
