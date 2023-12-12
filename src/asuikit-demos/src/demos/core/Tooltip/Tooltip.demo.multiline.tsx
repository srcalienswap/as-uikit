import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Tooltip, Group, Button } from '@asuikit/core';

const code = `
import { Tooltip, Button } from '@asuikit/core';

function Demo() {
  return (
    <Tooltip
      multiline
      width={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}
`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip
        multiline
        width={220}
        withArrow
        transitionProps={{ duration: 200 }}
        label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
      >
        <Button variant="outline">Multiline tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const multiline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
