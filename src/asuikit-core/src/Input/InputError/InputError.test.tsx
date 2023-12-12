import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { InputError, InputErrorProps } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@asuikit/core/InputError', () => {
  itRendersChildren(InputError, defaultProps);
  itSupportsProviderVariant(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsProviderSize(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/InputError',
    providerName: 'InputError',
  });
});
