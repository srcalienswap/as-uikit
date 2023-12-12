import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { NumberInput } from '@asuikit/core';

const code = `
import { NumberInput } from '@asuikit/core';

function Demo() {
  return (
    <NumberInput
      label="Number input with decimal steps"
      defaultValue={0.05}
      precision={2}
      min={-1}
      step={0.05}
      max={1}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      label="Number input with decimal steps"
      placeholder="Decimal steps"
      defaultValue={0.05}
      precision={2}
      min={-1}
      step={0.05}
      max={1}
    />
  );
}

export const decimal: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
