import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

function Demo() {
  return (
    <Select
      label="Read only select"
      placeholder="Pick one"
      defaultValue="react"
      readOnly
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
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
      label="Read only select"
      placeholder="Pick one"
      defaultValue="react"
      readOnly
      withinPortal
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
