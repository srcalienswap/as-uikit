import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Progress } from '@asuikit/core';

const code = `
import { Progress } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
      <Progress
        mt="md"
        size="xl"
        radius="xl"
        sections={[
          { value: 30, color: 'pink', label: 'Documents' },
          { value: 30, color: 'grape', label: 'Apps' },
          { value: 25, color: 'purple', label: 'Other' },
        ]}
      />
    </>
  );
}
`;

function Label() {
  return (
    <>
      <Progress value={75} label="75%" size="xl" radius="xl" />
      <Progress
        mt="md"
        size="xl"
        radius="xl"
        sections={[
          { value: 30, color: 'pink', label: 'Documents' },
          { value: 30, color: 'grape', label: 'Apps' },
          { value: 25, color: 'purple', label: 'Other' },
        ]}
      />
    </>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
