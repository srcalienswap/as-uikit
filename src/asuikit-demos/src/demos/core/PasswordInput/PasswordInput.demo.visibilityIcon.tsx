import React from 'react';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { PasswordInput } from '@asuikit/core';

const code = `
import { PasswordInput } from '@asuikit/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
    />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
    />
  );
}

export const visibilityIcon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
