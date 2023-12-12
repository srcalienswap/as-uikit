import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

function Demo() {
  return (
    <Select
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      withinPortal
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}

export const group: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
