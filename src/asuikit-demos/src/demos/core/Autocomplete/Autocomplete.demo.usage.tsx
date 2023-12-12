import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Autocomplete } from '@asuikit/core';

const code = `
import { Autocomplete } from '@asuikit/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
