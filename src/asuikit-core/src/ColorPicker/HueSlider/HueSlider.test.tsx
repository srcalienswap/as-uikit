import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
};

describe('@asuikit/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsProviderSize(HueSlider, defaultProps, 'HueSlider', 'slider');
  itSupportsProviderVariant(HueSlider, defaultProps, 'HueSlider', 'slider');
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@asuikit/core/HueSlider',
    refType: HTMLDivElement,
    providerName: 'HueSlider',
  });
});
