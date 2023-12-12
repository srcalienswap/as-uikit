import React from 'react';
import { MultiSelect } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@asuikit/core';

function Demo() {
  return (
    <MultiSelect
      data={[/* ...data */]}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
