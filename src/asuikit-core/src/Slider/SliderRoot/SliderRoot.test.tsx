import React from 'react';
import { itSupportsSystemProps } from '@asuikit/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
  variant: '',
};

describe('@asuikit/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@asuikit/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
