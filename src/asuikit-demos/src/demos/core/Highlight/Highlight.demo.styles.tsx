import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Highlight } from '@asuikit/core';

const code = `
import { Highlight } from '@asuikit/core';

function Demo() {
  return (
    <Highlight
      align="center"
      highlight={['highlighted', 'default']}
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      })}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      align="center"
      highlight={['highlighted', 'default']}
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      })}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}

export const styles: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
