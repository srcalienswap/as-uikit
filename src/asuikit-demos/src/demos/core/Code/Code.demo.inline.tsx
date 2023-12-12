import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Code } from '@asuikit/core';

const code = `
import { Code } from '@asuikit/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
