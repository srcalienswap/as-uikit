import React from 'react';
import { Carousel } from '@asuikit/carousel';
import { MantineDemo } from '@asuikit/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@asuikit/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
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
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Slides count={12} />
    </Carousel>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
