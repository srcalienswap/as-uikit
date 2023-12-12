import React, { useRef } from 'react';
import { Button, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { BaseDemo } from './_base';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@asuikit/core';
import { Dropzone } from '@asuikit/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef}>
        {/* children */}
      </Dropzone>

      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <BaseDemo openRef={openRef} />
      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}

export const manual: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
