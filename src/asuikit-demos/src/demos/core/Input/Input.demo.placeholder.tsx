import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Input } from '@asuikit/core';

const code = `
import { Input } from '@asuikit/core';

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;

function Demo() {
  return (
    <Input component="button">
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
