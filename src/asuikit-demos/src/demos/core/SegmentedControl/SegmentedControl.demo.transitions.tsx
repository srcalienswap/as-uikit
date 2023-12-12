import React from 'react';
import { Text, Flex } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@asuikit/core';

function Demo() {
  return (
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`;

function Demo() {
  return (
    <Flex direction="column" align="center">
      <div>
        <Text size="sm" weight={500} mt={3}>
          No transitions
        </Text>
        <SegmentedControlWrapper transitionDuration={0} />
      </div>

      <div>
        <Text size="sm" weight={500} mt="md">
          500ms linear transition
        </Text>
        <SegmentedControlWrapper transitionDuration={500} transitionTimingFunction="linear" />
      </div>
    </Flex>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
