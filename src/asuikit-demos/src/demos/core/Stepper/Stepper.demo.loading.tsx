import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Stepper } from '@asuikit/core';

const code = `
import { Stepper } from '@asuikit/core';

function Demo() {
  return (
    <Stepper active={1} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  return (
    <Stepper active={1} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
