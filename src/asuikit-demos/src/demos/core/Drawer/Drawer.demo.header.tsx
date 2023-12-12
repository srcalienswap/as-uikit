import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { useDisclosure } from '@asuikit/hooks';
import { Drawer, Group, Button } from '@asuikit/core';

const code = `
import { useDisclosure } from '@asuikit/hooks';
import { Drawer, Group, Button } from '@asuikit/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
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
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}

export const header: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
