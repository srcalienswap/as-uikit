import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { TextInput } from '@asuikit/core';

const code = `
import { TextInput } from '@asuikit/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<IconAt size="0.8rem" />} />;
}
`;

function Demo() {
  return (
    <TextInput
      maw={320}
      mx="auto"
      label="Your email"
      placeholder="Your email"
      icon={<IconAt size="0.8rem" />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
