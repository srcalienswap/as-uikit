import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { CloseButton, Group } from '@asuikit/core';

const code = `
import { CloseButton, Group } from '@asuikit/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
