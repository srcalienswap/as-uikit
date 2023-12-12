import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Tooltip, Badge, Group, AVAILABLE_TRANSITIONS } from '@asuikit/core';

export function Demo() {
  const transitions = AVAILABLE_TRANSITIONS.map((transition) => (
    <Tooltip key={transition} label={transition} transitionProps={{ transition, duration: 300 }}>
      <Badge>{transition}</Badge>
    </Tooltip>
  ));

  return <Group position="center">{transitions}</Group>;
}

export const transitions: MantineDemo = {
  type: 'demo',
  component: Demo,
};
