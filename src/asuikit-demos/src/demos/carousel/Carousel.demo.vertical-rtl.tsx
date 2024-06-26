import { Carousel } from '@asuikit/carousel';
import { MantineProvider } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import React from 'react';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@asuikit/carousel';

function Demo() {
  return (
    <MantineProvider theme={{ dir: 'rtl' }}>
      <Carousel orientation="vertical" height={200} withIndicators sx={{ maxWidth: 320 }} mx="auto">
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </MantineProvider>
  );
}
`;

function Demo() {
  document.documentElement.dir = 'rtl';
  return (
    <MantineProvider theme={{ dir: 'rtl' }}>
      <Carousel orientation="vertical" height={200} withIndicators sx={{ maxWidth: 320 }} mx="auto">
        <Slides count={5} />
      </Carousel>
    </MantineProvider>
  );
}

export const verticalRTL: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
