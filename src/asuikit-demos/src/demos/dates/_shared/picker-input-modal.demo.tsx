import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Component
        dropdownType="modal"
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
        mx="auto"
        maw={400}
      />
    );
  };
}

export function getPickerInputModalDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@asuikit/dates/', '')),
    component: getDemo(Component),
  };
}
