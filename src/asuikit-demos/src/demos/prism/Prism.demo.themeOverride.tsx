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
  return <Prism colorScheme="dark" language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
