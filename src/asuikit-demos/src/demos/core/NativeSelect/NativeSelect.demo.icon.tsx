import React from 'react';
import { IconHash } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { NativeSelect } from '@asuikit/core';

const code = `
import { NativeSelect } from '@asuikit/core';
import { IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<IconHash size="1rem" />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
