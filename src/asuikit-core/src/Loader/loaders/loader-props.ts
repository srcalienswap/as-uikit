import React from 'react';
import type { MantineColor } from '@asuikit/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number | string;
  color: MantineColor;
}
