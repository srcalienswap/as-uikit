import React from 'react';
import { IconUpload } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { FileInput, rem } from '@asuikit/core';

const code = `
import { FileInput, rem } from '@asuikit/core';
import { IconUpload } from '@tabler/icons-react';

function Demo() {
  return <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={rem(14)} />} />;
}
`;

function Demo() {
  return (
    <FileInput
      maw={320}
      mx="auto"
      label="Your resume"
      placeholder="Your resume"
      icon={<IconUpload size={rem(14)} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
