import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group, Button } from '@asuikit/core';
import { notifications } from '@asuikit/notifications';

const code = `
import { Group, Button } from '@asuikit/core';
import { notifications } from '@asuikit/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={notifications.cleanQueue}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={notifications.clean}>
        Clean all
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={notifications.cleanQueue}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={notifications.clean}>
        Clean all
      </Button>
    </Group>
  );
}

export const clean: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
