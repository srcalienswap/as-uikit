import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@asuikit/carousel';
import { Progress, rem } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { Slides } from './_slides';

const code = `
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@asuikit/carousel';
import { Progress, rem } from '@asuikit/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{ bar: { transitionDuration: '0ms' }, root: { maxWidth: rem(320) } }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
`;

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Slides count={12} />
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{ bar: { transitionDuration: '0ms' }, root: { maxWidth: rem(320) } }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}

export const progress: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
