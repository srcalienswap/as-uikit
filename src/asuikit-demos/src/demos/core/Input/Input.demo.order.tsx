import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { TextInput, Box } from '@asuikit/core';

const code = `
import { TextInput } from '@asuikit/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </Box>
  );
}

export const order: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
