import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Code, Group } from '@asuikit/core';

const code = `
import { Code } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
