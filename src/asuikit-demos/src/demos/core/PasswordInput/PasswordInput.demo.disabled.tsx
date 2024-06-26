import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { PasswordInput, Box } from '@asuikit/core';

const code = `
import { PasswordInput } from '@asuikit/core';

function Demo() {
  return <PasswordInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <PasswordInput label="Disabled without value" placeholder="Your password" disabled />

      <PasswordInput
        mt="md"
        label="Disabled with value"
        placeholder="Your password"
        disabled
        value="secret"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
