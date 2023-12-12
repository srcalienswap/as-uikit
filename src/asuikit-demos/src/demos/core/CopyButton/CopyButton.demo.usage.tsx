import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group, CopyButton, Button } from '@asuikit/core';

const code = `
import { CopyButton, Button } from '@asuikit/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CopyButton value="https://mantine.dev">
        {({ copied, copy }) => (
          <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        )}
      </CopyButton>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
