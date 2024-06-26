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
      disableSelectedItemFiltering
      label="Your favorite frameworks/libraries"
      nothingFound="Nothing found"
      placeholder="Pick all that you like"
      searchable
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      data={data}
      disableSelectedItemFiltering
      label="Your favorite frameworks/libraries"
      maw={400}
      mx="auto"
      nothingFound="Nothing found"
      placeholder="Pick all that you like"
      searchable
    />
  );
}

export const disableSelectedItemFiltering: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
