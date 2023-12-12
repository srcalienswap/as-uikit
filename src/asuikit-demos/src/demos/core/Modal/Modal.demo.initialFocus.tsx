import React from 'react';
import { Modal, Group, Button, TextInput } from '@asuikit/core';
import { useDisclosure } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';

const code = `
import { useDisclosure } from '@asuikit/hooks';
import { Modal, Group, Button, TextInput } from '@asuikit/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
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
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export const initialFocus: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
