import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MantineProvider, Button } from '@asuikit/core';

const code = `
import { MantineProvider, Button } from '@asuikit/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}

export const defaultPropsTheme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
