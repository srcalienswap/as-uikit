import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { rem, Title } from '@asuikit/core';

const code = `
import { Title } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="${rem(12)}">H1 heading with ${rem(12)} size</Title>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={rem(12)}>H1 heading with {rem(12)} size</Title>
    </>
  );
}

export const size: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
