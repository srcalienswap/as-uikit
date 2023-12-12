import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Group, Button } from '@asuikit/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@asuikit/hooks';
import { Button } from '@asuikit/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
