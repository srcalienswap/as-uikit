import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DateInput } from '@asuikit/dates';

const code = `
import { DateInput } from '@asuikit/dates';

function Demo() {
  return (
    <DateInput
      dateParser={(input) => {
        if (input === 'WW2') {
          return new Date(1939, 8, 1);
        }
        return new Date(input);
      }}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      dateParser={(input) => {
        if (input === 'WW2') {
          return new Date(1939, 8, 1);
        }
        return new Date(input);
      }}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
      maw={400}
      mx="auto"
    />
  );
}

export const parser: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
