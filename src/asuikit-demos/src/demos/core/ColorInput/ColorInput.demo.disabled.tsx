import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { ColorInput, Box } from '@asuikit/core';

const code = `
import { ColorInput } from '@asuikit/core';

function Demo() {
  return <ColorInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <ColorInput label="Disabled without value" placeholder="Your favorite color" disabled />

      <ColorInput
        mt="md"
        label="Disabled with value"
        placeholder="Your favorite color"
        disabled
        value="#EFD679"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
