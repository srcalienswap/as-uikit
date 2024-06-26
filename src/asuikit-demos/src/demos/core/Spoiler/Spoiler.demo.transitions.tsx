import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Wrapper } from './_wrapper';

const code = `
import { Spoiler } from '@asuikit/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
      {/* Content here */}
    </Spoiler>
  );
}
`;

function Demo() {
  return <Wrapper transitionDuration={0} />;
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
