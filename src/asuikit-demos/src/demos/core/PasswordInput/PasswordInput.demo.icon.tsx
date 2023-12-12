import React from 'react';
import { IconLock } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { PasswordInput } from '@asuikit/core';

const code = `
import { PasswordInput } from '@asuikit/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
