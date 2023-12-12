import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      onSearchChange={onSearchChange}
      searchValue={searchValue}
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  const [searchValue, onSearchChange] = useState('');

  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      onSearchChange={onSearchChange}
      searchValue={searchValue}
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      withinPortal
    />
  );
}

export const searchableControlled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
