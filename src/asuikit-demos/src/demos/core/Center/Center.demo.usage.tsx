import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Center, Box } from '@asuikit/core';

const code = `
import { Center } from '@asuikit/core';

function Demo() {
  return (
    <Center maw={400} h={100} mx="auto">
      <div>All elements inside Center are centered</div>
    </Center>
  );
}
`;

function Demo() {
  return (
    <Center
      maw={400}
      h={100}
      mx="auto"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
      })}
    >
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[1],
        })}
      >
        All elements inside Center are centered
      </Box>
    </Center>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
