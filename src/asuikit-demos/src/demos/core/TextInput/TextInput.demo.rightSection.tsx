import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { TextInput, Loader } from '@asuikit/core';

const code = `
import { TextInput, Loader } from '@asuikit/core';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />;
}
`;

function Demo() {
  return (
    <TextInput
      maw={320}
      mx="auto"
      label="Your email"
      placeholder="Your email"
      defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
      rightSection={<Loader size="xs" />}
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
