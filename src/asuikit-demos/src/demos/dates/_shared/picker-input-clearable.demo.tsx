import React from 'react';
import { MantineDemo } from '@asuikit/ds';

const getCode = (name: string) => `
import { ${name} } from '@asuikit/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Component
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}

export function getPickerInputClearableDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@asuikit/dates/', '')),
    component: getDemo(Component),
  };
}
