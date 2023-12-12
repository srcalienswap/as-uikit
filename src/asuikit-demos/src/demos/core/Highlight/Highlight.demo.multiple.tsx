import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Highlight } from '@asuikit/core';

const code = `
import { Highlight } from '@asuikit/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
