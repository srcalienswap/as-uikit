import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Text, Space } from '@asuikit/core';

function Wrapper(props: any) {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First part</Text>
      <Space {...props} />
      <Text>Second part</Text>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Text, Space } from '@asuikit/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space${props} />
      <Text>Second line</Text>
    </div>
  );
}
`;

export const vertical: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'w', type: 'size', initialValue: 'md', defaultValue: 0 }],
};
