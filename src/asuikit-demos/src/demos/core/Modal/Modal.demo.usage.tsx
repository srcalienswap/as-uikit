import React from 'react';
import { Modal, Group, Button } from '@asuikit/core';
import { useDisclosure } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@asuikit/hooks';
import { Modal, Button, Group } from '@asuikit/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
