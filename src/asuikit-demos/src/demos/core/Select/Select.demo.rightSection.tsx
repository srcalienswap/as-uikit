import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      withinPortal
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
