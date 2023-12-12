import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Box, NativeSelect } from '@asuikit/core';

const code = `
import { NativeSelect } from '@asuikit/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled select"
        placeholder="Pick one that you like"
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
