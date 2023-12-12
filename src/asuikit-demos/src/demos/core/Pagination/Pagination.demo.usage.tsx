import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Pagination } from '@asuikit/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
