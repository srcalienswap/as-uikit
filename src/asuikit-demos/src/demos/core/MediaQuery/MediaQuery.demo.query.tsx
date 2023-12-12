import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MediaQuery, Text, rem, em } from '@asuikit/core';

const code = `
import { MediaQuery, Text, rem } from '@asuikit/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${em(1200)}) and (min-width: ${em(800)})"
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: ${em(1200)}) and (min-width: ${em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;

function Demo() {
  return (
    <MediaQuery
      query={`(max-width: ${em(1200)}) and (min-width: ${em(800)})`}
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>
        (max-width: {em(1200)}) and (min-width: {em(800)}) breakpoints
      </Text>
    </MediaQuery>
  );
}

export const query: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
