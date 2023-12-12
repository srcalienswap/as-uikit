import React from 'react';
import { Group, Badge } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useColorScheme } from '@asuikit/hooks';

const code = `
import { Badge } from '@asuikit/core';
import { useColorScheme } from '@asuikit/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
