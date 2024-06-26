import { SpotlightAction } from '@asuikit/spotlight';
import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider, SpotlightAction } from '@asuikit/spotlight';

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Will stay open', onTrigger, closeOnTrigger: false },
  { title: 'Will close', onTrigger, closeOnTrigger: true },
];

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 5"
    >
      <App />
    </SpotlightProvider>
  );
}
`;

const onTrigger = () => {};

const actions: SpotlightAction[] = [
  { title: 'Will stay open', onTrigger, closeOnTrigger: false },
  { title: 'Will close', onTrigger, closeOnTrigger: true },
];

function Demo() {
  return <Wrapper actions={actions} searchPlaceholder="Search..." shortcut="mod + shift + 5" />;
}

export const actionsCloseOnTrigger: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
