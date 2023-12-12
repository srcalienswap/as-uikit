import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Tooltip, Button, Group } from '@asuikit/core';

const code = `
import { Tooltip, Button } from '@asuikit/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip">
        <Button variant="outline">Button with tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
