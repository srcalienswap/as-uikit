import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Kbd } from '@asuikit/core';

const code = `
import { Kbd } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
