import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group, Badge } from '@asuikit/core';

const code = `
import { Badge, Group } from '@asuikit/core';

const CustomComponent = ({ pads, children, ...others }: { pads: string; children: React.ReactNode; }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://mantine.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}
`;

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://mantine.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
