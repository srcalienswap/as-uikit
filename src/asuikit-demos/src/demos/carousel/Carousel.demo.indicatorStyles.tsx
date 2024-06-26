import React from 'react';
import { Carousel } from '@asuikit/carousel';
import { rem } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@asuikit/carousel';
import { rem } from '@asuikit/core';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },
        },
      }}
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
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },
        },
      }}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const indicatorStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
