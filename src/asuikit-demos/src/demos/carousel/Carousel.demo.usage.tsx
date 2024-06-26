import React from 'react';
import { Carousel } from '@asuikit/carousel';
import { MantineDemo } from '@asuikit/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@asuikit/carousel';

function Demo() {
  return (
    <Carousel maw={320} mx="auto" withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel maw={320} mx="auto" withIndicators height={200}>
      <Slides count={5} />
    </Carousel>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
