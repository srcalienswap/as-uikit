import React from 'react';
import { Prism } from '@asuikit/prism';
import { MantineDemo } from '@asuikit/ds';

const demoCode = `
import { Button } from '@asuikit/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@asuikit/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
