/* eslint-disable no-console */
import React from 'react';
import type { SpotlightAction } from '@asuikit/spotlight';
import { MantineDemo } from '@asuikit/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@asuikit/spotlight';
import type { SpotlightAction } from '@asuikit/spotlight';

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: \`Action \${index}\`,
    onTrigger: () => console.log(\`Action \${index}\`),
  }));

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      limit={7}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
    >
      <App />
    </SpotlightProvider>
  );
}
`;

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: `Action ${index}`,
    onTrigger: () => console.log(`Action ${index}`),
  }));

function Demo() {
  return (
    <Wrapper
      actions={actions}
      limit={7}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
      buttonLabel="Open spotlight with limit"
    />
  );
}

export const large: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
