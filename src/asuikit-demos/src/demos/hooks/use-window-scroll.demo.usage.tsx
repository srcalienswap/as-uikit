import React from 'react';
import { useWindowScroll } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Button, Text, Group } from '@asuikit/core';

const code = `
import { useWindowScroll } from '@asuikit/hooks';
import { Button, Text, Group } from '@asuikit/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
