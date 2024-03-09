import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Text, Space } from '@asuikit/core';

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const codeTemplate = (props: string) => `
import { Text, Space } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space${props} />
      <Text>Second line</Text>
    </>
  );
}
`;

export const horizontal: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'h', type: 'size', initialValue: 'md', defaultValue: 0 }],
};
