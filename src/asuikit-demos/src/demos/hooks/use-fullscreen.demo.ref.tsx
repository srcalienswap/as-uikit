import React from 'react';
import { useFullscreen } from '@asuikit/hooks';
import { Button, Stack, Image } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';

const refCode = `
import { useFullscreen } from '@asuikit/hooks';
import { Button, Image } from '@asuikit/core';

function Demo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <>
      <Image
        ref={ref}
        src="https://unsplash.com/image.jpg"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />

      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </>
  );
}
`;

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <Image
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Unsplash Image to make Fullscreen"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}

export const useFullscreenRefDemo: MantineDemo = {
  type: 'demo',
  code: refCode,
  component: RefDemo,
};
