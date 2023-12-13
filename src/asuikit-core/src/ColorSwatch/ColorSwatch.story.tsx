import React from 'react';
import { DEFAULT_THEME } from '@asuikit/styles';
import { Group } from '../Group/Group';
import { ColorSwatch } from './ColorSwatch';
import { Stack } from '../Stack';
import { Box } from '../Box';

export default { title: 'ColorSwatch' };

const swatches = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <Group spacing={4} key={theme}>
    <Box w={120} style={{ textAlign: 'right' }}>
      {theme}
    </Box>
    {new Array(9).fill('').map((_, index) => (
      <ColorSwatch color={DEFAULT_THEME.colors[theme][index]} key={`${theme}_${index}`} size={20} />
    ))}
  </Group>
));

const transparent = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch
    color={DEFAULT_THEME.fn.rgba(DEFAULT_THEME.colors[theme][5], 0.5)}
    key={theme}
    size={20}
  />
));

export function Colors() {
  return <Stack p={40}>{swatches}</Stack>;
}

export function Opacity() {
  return <Group p={40}>{transparent}</Group>;
}

export function CustomComponent() {
  return (
    <Group p={40}>
      <ColorSwatch color="#f300f3" component="button" />
      <ColorSwatch color="#000" component="a" href="https://mantine.dev" />
    </Group>
  );
}
