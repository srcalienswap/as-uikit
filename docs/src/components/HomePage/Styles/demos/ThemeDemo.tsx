import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor, em } from '@asuikit/core';
import { Prism } from '@asuikit/prism';

const code = `
import { Text } from '@asuikit/core';

function Demo() {
  return (
    <Text
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        fontSize: theme.fontSizes.sm,

        '@media (max-width: ${em(755)})': {
          fontSize: theme.fontSizes.xs,
        },
      })}
    >
      My custom text
    </Text>
  );
}
`;

export function ThemeDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Subscribe to{' '}
        <Anchor component={Link} to="/theming/theme-object/">
          theme object
        </Anchor>{' '}
        in sx prop or createStyles function to use theme tokens in component styles:
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
