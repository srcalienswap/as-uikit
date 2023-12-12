import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsInputProps,
  itDisablesInputInsideDisabledFieldset,
} from '@asuikit/tests';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  label: 'test-label',
};

describe('@asuikit/core/TimeInput', () => {
  checkAccessibility([<TimeInput label="test-input" />, <TimeInput aria-label="test-input" />]);
  itSupportsInputProps(TimeInput, defaultProps, 'TimeInput');
  itSupportsFocusEvents(TimeInput, defaultProps, 'input');
  itSupportsProviderVariant(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsProviderSize(TimeInput, defaultProps, 'TimeInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: TimeInput,
    props: defaultProps,
    refType: HTMLInputElement,
    displayName: '@asuikit/dates/TimeInput',
    othersSelector: 'input',
    providerName: 'TimeInput',
  });
  itDisablesInputInsideDisabledFieldset(TimeInput, defaultProps);
});
