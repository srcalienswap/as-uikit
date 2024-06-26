import React from 'react';
import { useOs } from '@asuikit/hooks';
import { MantineDemo } from '@asuikit/ds';
import { Text } from '@asuikit/core';

const code = `
import { useOs } from '@asuikit/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
