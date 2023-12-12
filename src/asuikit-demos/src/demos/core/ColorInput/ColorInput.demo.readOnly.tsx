import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { ColorInput } from '@asuikit/core';

const code = `
import { ColorInput } from '@asuikit/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      disallowInput
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
