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
  return (
    <>
      <Prism noCopy language="tsx">{/* ...code */}</Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
      >
        {/* ...code */}
      </Prism>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Prism language="tsx" noCopy>
        {demoCode}
      </Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
        mt="lg"
      >
        {demoCode}
      </Prism>
    </>
  );
}

export const copyLabel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
