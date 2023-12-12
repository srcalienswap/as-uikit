import React from 'react';
import { Prism } from '@asuikit/prism';
import { MantineDemo } from '@asuikit/ds';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

export const demoCode = `
import { Button } from '@asuikit/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { Prism } from '@asuikit/prism';

const demoCode = \`import { Button } from '@asuikit/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return (
    <Prism
      language="tsx"
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === 'light' ? duotoneLight : duotoneDark
      }
    >
      {demoCode}
    </Prism>
  );
}
`;

function Demo() {
  return (
    <Prism
      language="tsx"
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === 'light' ? duotoneLight : duotoneDark
      }
    >
      {demoCode}
    </Prism>
  );
}

export const prismTheme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
