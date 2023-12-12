import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { useFavicon } from '@asuikit/hooks';
import { Group, Button } from '@asuikit/core';

const code = `
import { useState } from 'react';
import { useFavicon } from '@asuikit/hooks';
import { Group, Button } from '@asuikit/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
