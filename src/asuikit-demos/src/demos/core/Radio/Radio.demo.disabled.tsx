import { Box, Radio } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import React from 'react';

const code = `
import { Radio } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" mt="xs" />
      <Radio disabled label="Svelte" value="sv" mt="xs" />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
