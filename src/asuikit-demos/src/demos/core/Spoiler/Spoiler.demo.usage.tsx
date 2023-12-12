import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Wrapper } from './_wrapper';

const code = `
import { Spoiler } from '@asuikit/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
`;

function Demo() {
  return <Wrapper />;
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
