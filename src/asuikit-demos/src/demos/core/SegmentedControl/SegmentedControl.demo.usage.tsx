import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@asuikit/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <SegmentedControlWrapper />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
