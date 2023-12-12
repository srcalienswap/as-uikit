import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MantineProvider, Group, Button, Switch, ButtonProps, SwitchProps } from '@asuikit/core';

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: 'xs',
  color: 'cyan',
};

const SwitchDefaultProps: Partial<SwitchProps> = {
  size: 'xs',
  onLabel: 'ON',
  offLabel: 'OFF',
};

const code = `
import { MantineProvider, Group, Button, Switch } from '@asuikit/core';

function Demo() {
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Button: {
              defaultProps: {
                size: 'xs',
                color: 'cyan',
              },
            },

            Switch: {
              defaultProps: {
                size: 'xs',
                onLabel: 'ON',
                offLabel: 'OFF',
              },
            },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <MantineProvider
        inherit
        theme={{
          components: {
            Button: { defaultProps: ButtonDefaultProps },
            Switch: { defaultProps: SwitchDefaultProps },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}

export const defaultProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
