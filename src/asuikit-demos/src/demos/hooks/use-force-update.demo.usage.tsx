import React from 'react';
import { Button, Text, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useForceUpdate, randomId } from '@asuikit/hooks';

const code = `
import { Button, Text, Group } from '@asuikit/core';
import { useForceUpdate, randomId } from '@asuikit/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
