import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Anchor } from '@asuikit/core';

const code = `
import { Anchor } from '@asuikit/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
