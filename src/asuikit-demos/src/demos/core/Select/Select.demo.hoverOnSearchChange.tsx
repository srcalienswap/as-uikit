import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      searchable
      hoverOnSearchChange
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        withinPortal
        searchable
        hoverOnSearchChange
      />
    </div>
  );
}

export const hoverOnSearchChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
