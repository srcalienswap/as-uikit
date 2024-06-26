import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { useMantineTheme, ColorSwatch, Group } from '@asuikit/core';

const code = `
import { ColorSwatch, Group, useMantineTheme } from '@asuikit/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const transparent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
