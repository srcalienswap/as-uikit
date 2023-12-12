import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@asuikit/core';
import { ${name} } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <${name} type="multiple" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date[]>([]);
    return (
      <Group position="center">
        <Component type="multiple" value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerMultipleDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@asuikit/dates/', '')),
    component: getDemo(Component),
  };
}
