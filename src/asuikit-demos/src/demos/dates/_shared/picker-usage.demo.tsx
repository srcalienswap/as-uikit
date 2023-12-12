import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@asuikit/core';
import { ${name} } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <${name} value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Group position="center">
        <Component value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerUsageDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@asuikit/dates/', '')),
    component: getDemo(Component),
  };
}
