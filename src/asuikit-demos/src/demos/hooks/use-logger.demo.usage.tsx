import React, { useState } from 'react';
import { useLogger } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Button, Group } from '@asuikit/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@asuikit/hooks';
import { Button } from '@asuikit/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
