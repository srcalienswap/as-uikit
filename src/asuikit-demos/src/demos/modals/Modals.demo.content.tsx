import React from 'react';
import { TextInput, Button, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { modals } from '@asuikit/modals';

const code = `
import { TextInput, Button, Group } from '@asuikit/core';
import { modals } from '@asuikit/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
