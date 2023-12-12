import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Tooltip, Button, Group } from '@asuikit/core';

const code = `
import { Tooltip, Button, Group } from '@asuikit/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group position="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`;

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group position="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}

export const group: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
