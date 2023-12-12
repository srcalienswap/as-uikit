import React from 'react';
import { useHover } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { useMantineTheme, Text, rem } from '@asuikit/core';

const code = `
import { useHover } from '@asuikit/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      style={{
        height: rem(60),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{hovered ? 'I am hovered' : 'Put mouse over me please'}</Text>
    </div>
  );
}

export const useHoverDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
