import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MantineProvider, Button, Group } from '@asuikit/core';

const code = `
import { MantineProvider, Button, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'red',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}

export const defaultGradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
