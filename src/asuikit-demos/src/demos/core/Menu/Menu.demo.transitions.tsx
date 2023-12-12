import React from 'react';
import { Group, Menu } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@asuikit/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
