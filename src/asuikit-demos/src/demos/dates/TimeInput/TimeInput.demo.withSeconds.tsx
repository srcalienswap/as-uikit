import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { TimeInput } from '@asuikit/dates';

const code = `
import { TimeInput } from '@asuikit/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
