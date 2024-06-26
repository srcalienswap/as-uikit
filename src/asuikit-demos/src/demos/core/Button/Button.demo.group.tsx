import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Button, ButtonGroupProps, Group } from '@asuikit/core';

const codeTemplate = (props: string) => `
import { Button } from '@asuikit/core';

function Demo() {
  return (
    <Button.Group${props}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`;

function Wrapper(props: ButtonGroupProps) {
  return (
    <Group position="center">
      <Button.Group {...props}>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </Group>
  );
}

export const group: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'orientation',
      type: 'segmented',
      data: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
  ],
};
