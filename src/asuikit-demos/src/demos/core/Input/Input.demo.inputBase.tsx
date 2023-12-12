import React from 'react';
import { InputBase, Box } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { IMaskInput } from 'react-imask';

const code = `
import { InputBase } from '@asuikit/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <Box maw={320} mx="auto">
    <InputBase label="Your phone" component={IMaskInput} mask="+7 (000) 000-0000" />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <InputBase<any> label="Your phone" component={IMaskInput} mask="+7 (000) 000-0000" />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </Box>
  );
}

export const inputBase: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
