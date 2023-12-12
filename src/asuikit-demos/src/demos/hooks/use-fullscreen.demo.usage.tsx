import React from 'react';
import { useFullscreen } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Button, Group } from '@asuikit/core';

const code = `
import { useFullscreen } from '@asuikit/hooks';
import { Button } from '@asuikit/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
