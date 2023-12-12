import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Highlight } from '@asuikit/core';

const code = `
import { Highlight } from '@asuikit/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
