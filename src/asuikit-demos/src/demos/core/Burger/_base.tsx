import React from 'react';
import { useDisclosure } from '@asuikit/hooks';
import { Burger } from '@asuikit/core';

export function DemoBase(
  props: Omit<React.ComponentPropsWithoutRef<typeof Burger>, 'opened' | 'onChange'>
) {
  const [opened, { toggle }] = useDisclosure(false);
  return <Burger m="xs" opened={opened} onClick={toggle} {...props} />;
}
