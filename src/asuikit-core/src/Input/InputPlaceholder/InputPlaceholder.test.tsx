import { itSupportsSystemProps, itRendersChildren } from '@asuikit/tests';
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@asuikit/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps);
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@asuikit/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  });
});
