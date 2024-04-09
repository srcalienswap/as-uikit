import React from 'react';
import { Group, Button } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { notifications } from '@asuikit/notifications';

const code = `
import { Group, Button } from '@asuikit/core';
import { notifications } from '@asuikit/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show default notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show('other-notifications', {
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification in others position
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show default notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show('other-notifications', {
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification in others position
      </Button>
    </Group>
  );
}

export const multiNotifications: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
