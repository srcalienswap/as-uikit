import React from 'react';
import type { SpotlightAction } from '@asuikit/spotlight';
import { MantineDemo } from '@asuikit/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider, SpotlightAction } from '@asuikit/spotlight';

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Home', group: 'main', onTrigger },
  { title: 'Docs', group: 'main', onTrigger },
  { title: 'Dashboard', group: 'main', onTrigger },
  { title: 'Component: Tabs', group: 'search', onTrigger },
  { title: 'Component: SegmentedControl', group: 'search', onTrigger },
  { title: 'Component: Button', group: 'search', onTrigger },
];

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchPlaceholder="Search..."
      shortcut="mod + shift + V"
    >
      <App />
    </SpotlightProvider>
  );
}
`;

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Home', group: 'main', onTrigger },
  { title: 'Docs', group: 'main', onTrigger },
  { title: 'Dashboard', group: 'main', onTrigger },
  { title: 'Component: Tabs', group: 'search', onTrigger },
  { title: 'Component: SegmentedControl', group: 'search', onTrigger },
  { title: 'Component: Button', group: 'search', onTrigger },
];

function Demo() {
  return <Wrapper actions={actions} searchPlaceholder="Search..." shortcut="mod + shift + V" />;
}

export const groups: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
