import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { InputDescription, InputDescriptionProps } from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@asuikit/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps);
  itSupportsProviderVariant(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsProviderSize(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/InputDescription',
    providerName: 'InputDescription',
  });
});
