import React from 'react';
import { Text, Code } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useMouse } from '@asuikit/hooks';

const code = `
import { Text, Code } from '@asuikit/core';
import { useMouse } from '@asuikit/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
