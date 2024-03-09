import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor, rem, em } from '@asuikit/core';
import { Prism } from '@asuikit/prism';

const code = `
import { Text } from '@asuikit/core';

function Demo() {
  return (
    <Text
      sx={{
        fontSize: '${rem(18)}',

        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: ${em(755)})': {
          fontSize: '${rem(14)}',
        },
      }}
    >
      My custom text
    </Text>
  );
}
`;

export function SxDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Add inline styles to any component with{' '}
        <Anchor component={Link} to="/styles/sx/">
          sx prop:
        </Anchor>
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
