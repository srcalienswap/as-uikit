import React from 'react';
import { MultiSelect } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@asuikit/core';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      defaultValue={['react', 'next']}
      clearButtonProps={{ 'aria-label': 'Clear selection' }}
      clearable
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      defaultValue={['react', 'next']}
      clearButtonProps={{ 'aria-label': 'Clear selection' }}
      clearable
    />
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
