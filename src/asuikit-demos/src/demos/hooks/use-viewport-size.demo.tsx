import React from 'react';
import { useViewportSize } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Text } from '@asuikit/core';

const code = `
import { useViewportSize } from '@asuikit/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
