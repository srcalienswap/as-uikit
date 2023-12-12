import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateInput } from '@asuikit/dates';

const code = `
import { DateInput } from '@asuikit/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const time: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
