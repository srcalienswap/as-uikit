import React from 'react';
import { Group, Badge } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useReducedMotion } from '@asuikit/hooks';

const code = `
import { Badge } from '@asuikit/core';
import { useReducedMotion } from '@asuikit/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Group position="center">
      <Badge
        color={reduceMotion ? 'red' : 'teal'}
        style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
        variant="filled"
      >
        {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
      </Badge>
    </Group>
  );
}

export const useReducedMotionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
