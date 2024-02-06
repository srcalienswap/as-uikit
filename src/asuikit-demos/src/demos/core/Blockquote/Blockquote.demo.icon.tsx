import React from 'react';
import { IconFlame } from '@tabler/icons-react';
import { MantineDemo } from '@asuikit/ds';
import { Blockquote } from '@asuikit/core';

const code = `
import { Blockquote } from '@asuikit/core';
import { IconFlame } from '@tabler/icons-react';

function Demo() {
  return (
    <Blockquote
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<IconFlame size="1.5rem" />}
    >
      webpack built caa9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}
`;

function Demo() {
  return (
    <Blockquote
      maw={420}
      mx="auto"
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<IconFlame size="1.5rem" />}
    >
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
