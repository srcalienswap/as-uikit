import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MultiSelect } from '@asuikit/core';

const code = `
import { MultiSelect } from '@asuikit/core';

function Demo() {
  return (
    <MultiSelect
      label="MultiSelect with disabled items"
      placeholder="Select items"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue', disabled: true },
      ]}
    />
  );
}
`;

export function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      label="MultiSelect with disabled items"
      placeholder="Select items"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue', disabled: true },
      ]}
    />
  );
}

export const disabledItems: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
