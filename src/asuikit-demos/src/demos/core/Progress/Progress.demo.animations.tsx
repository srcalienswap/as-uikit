import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Progress } from '@asuikit/core';

const code = `
import { Progress } from '@asuikit/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
