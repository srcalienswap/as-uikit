import { Box, Group, Switch } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import React from 'react';

const code = `
import { Switch } from '@asuikit/core';

function Demo() {
  return <Switch disabled >;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <Switch disabled />
      </Group>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
