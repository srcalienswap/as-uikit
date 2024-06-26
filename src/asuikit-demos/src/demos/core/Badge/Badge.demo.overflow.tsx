import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Badge, Box, Flex } from '@asuikit/core';

const code = `
import { Badge, Box, Flex } from '@asuikit/core';

function Demo() {
  return (
    <Flex>
      <Box w={200}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </Box>

      <Box w={120} ml="md">
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </Box>
    </Flex>
  );
}
`;

function Demo() {
  return (
    <Flex>
      <Box w={200}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </Box>

      <Box w={120} ml="md">
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </Box>
    </Flex>
  );
}

export const overflow: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
