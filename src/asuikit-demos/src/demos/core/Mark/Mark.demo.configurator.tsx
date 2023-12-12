import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Mark, MarkProps, Text } from '@asuikit/core';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const codeTemplate = (props: string) => `
import { Text, Mark } from '@asuikit/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark${props}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }],
};
