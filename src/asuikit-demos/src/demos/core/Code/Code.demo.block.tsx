import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Code } from '@asuikit/core';

const code = `
import { Code } from '@asuikit/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@asuikit/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@asuikit/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
