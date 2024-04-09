import React from 'react';
import { Button, Flex } from '@asuikit/core';
import { Notifications } from './Notifications/Notifications';
import { notifications } from './events';

export default { title: 'Notifications' };

export function MultiNotifications() {
  return (
    <Flex gap={4}>
      <Notifications />
      <Notifications position="top-center" eventKey="other-notifications" />
      <Button
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show Notifications
      </Button>

      <Button
        onClick={() =>
          notifications.show('other-notifications', {
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show Notifications in Top-Center
      </Button>
    </Flex>
  );
}
