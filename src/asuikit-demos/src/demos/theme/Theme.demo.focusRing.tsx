import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MantineProvider, Button, Group, Text, Code } from '@asuikit/core';

function Demo() {
  return (
    <div>
      <Text>
        Focus ring: <Code>auto</Code>
      </Text>

      <Group mt="xs">
        <Button size="xs">Button 1</Button>
        <Button size="xs">Button 2</Button>
      </Group>

      <MantineProvider inherit theme={{ focusRing: 'always' }}>
        <Text mt="lg">
          Focus ring: <Code>always</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineProvider>

      <MantineProvider inherit theme={{ focusRing: 'never' }}>
        <Text mt="lg">
          Focus ring: <Code>never</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineProvider>
    </div>
  );
}

export const focusRing: MantineDemo = {
  type: 'demo',
  component: Demo,
};
