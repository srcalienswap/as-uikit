import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Text, Group } from '@asuikit/core';

const code = `
import { Text } from '@asuikit/core';

function Demo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Indigo cyan gradient
    </Text>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="center"
        fz="xl"
        fw={700}
      >
        Indigo cyan gradient
      </Text>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
