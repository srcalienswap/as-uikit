import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { NumberInput } from '@asuikit/core';

const code = `
import { NumberInput } from '@asuikit/core';

function Demo() {
  return (
    <NumberInput
      decimalSeparator=","
      thousandsSeparator="."
      label="Number input with custom separators"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      decimalSeparator=","
      thousandsSeparator="."
      label="Number input with custom separators"
      placeholder="Decimal separator"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}

export const decimalSeparator: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
