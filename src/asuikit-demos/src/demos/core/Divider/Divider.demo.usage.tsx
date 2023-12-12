import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Divider } from '@asuikit/core';

const code = `
import { Divider } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
