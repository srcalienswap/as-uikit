import React from 'react';
import { Prism } from '@asuikit/prism';
import { MantineDemo } from '@asuikit/ds';

export const demoCode = `
import { Button } from '@asuikit/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@asuikit/prism';

const demoCode = \`import { Button } from '@asuikit/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
