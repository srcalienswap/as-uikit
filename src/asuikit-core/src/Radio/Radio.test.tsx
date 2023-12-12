import React from 'react';
import {
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@asuikit/tests';
import { Radio, RadioProps } from './Radio';
import { RadioGroup } from './RadioGroup/RadioGroup';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@asuikit/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  itSupportsWrapperProps(Radio, defaultProps);
  itSupportsProviderVariant(Radio, defaultProps, 'Radio');
  itSupportsProviderSize(Radio, defaultProps, 'Radio');
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@asuikit/core/Radio',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Radio',
  });
  itDisablesInputInsideDisabledFieldset(Radio, defaultProps);

  it('exposes RadioGroup as a static component', () => {
    expect(Radio.Group).toBe(RadioGroup);
  });
});
