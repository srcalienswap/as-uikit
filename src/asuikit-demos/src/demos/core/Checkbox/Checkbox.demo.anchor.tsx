import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Checkbox, Anchor } from '@asuikit/core';

const code = `
import { Checkbox, Anchor } from '@asuikit/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
