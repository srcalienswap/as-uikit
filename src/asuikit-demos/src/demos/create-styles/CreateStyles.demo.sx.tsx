import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Button, Group } from '@asuikit/core';

const code = `
<Button
  sx={(theme) => ({
    borderColor: theme.colors.blue[9],

    '&:not([data-disabled]):hover': {
      backgroundColor: theme.colors.blue[9],
    },
  })}
>
  Button with sx styles
</Button>
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        sx={(theme) => ({
          borderColor: theme.colors.blue[9],

          '&:not([data-disabled]):hover': {
            backgroundColor: theme.colors.blue[9],
          },
        })}
      >
        Button with sx styles
      </Button>
    </Group>
  );
}

export const createStylesSx: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
