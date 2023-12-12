import React from 'react';
import { Button, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useToggle, upperFirst } from '@asuikit/hooks';

const code = `
import { Button } from '@asuikit/core';
import { useToggle } from '@asuikit/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
