import React from 'react';
import { Group, Button } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useClipboard } from '@asuikit/hooks';

const code = `
import { Button } from '@asuikit/core';
import { useClipboard } from '@asuikit/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
