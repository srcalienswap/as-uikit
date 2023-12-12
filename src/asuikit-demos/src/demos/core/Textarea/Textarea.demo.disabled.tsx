import { Box, Textarea } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import React from 'react';

const code = `
import { Textarea } from '@asuikit/core';

function Demo() {
  return <Textarea disabled/>;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Textarea label="Disabled" placeholder="Your comment" disabled />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
