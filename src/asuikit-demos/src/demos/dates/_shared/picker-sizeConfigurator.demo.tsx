import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';

const getCodeTemplate = (component: string) => (props: string) =>
  `import { ${component} } from '@asuikit/dates';

function Demo() {
  return <${component} defaultValue={new Date()}${props} />
}
`;

function getDemo(Component: React.FC<any>) {
  return (props: any) => (
    <Group position="center">
      <Component defaultValue={new Date()} {...props} />
    </Group>
  );
}

export function getPickerSizeConfiguratorDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'configurator',
    codeTemplate: getCodeTemplate(Component.displayName.replace('@asuikit/dates/', '')),
    configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
    component: getDemo(Component),
  };
}
