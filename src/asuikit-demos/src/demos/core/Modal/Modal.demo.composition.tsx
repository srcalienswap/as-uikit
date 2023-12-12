import React from 'react';
import { Modal, Group, Button } from '@asuikit/core';
import { useDisclosure } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';

const code = `
import { useDisclosure } from '@asuikit/hooks';
import { Modal, Button, Group } from '@asuikit/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

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
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const composition: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
