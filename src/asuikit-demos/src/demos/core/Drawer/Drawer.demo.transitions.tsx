import React from 'react';
import { Drawer, Button, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useDisclosure } from '@asuikit/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@asuikit/hooks';
import { Drawer, Button, Group } from '@asuikit/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}

`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
