import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@asuikit/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsProviderVariant(UnstyledButton, defaultProps, 'UnstyledButton');
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@asuikit/core/UnstyledButton',
    refType: HTMLButtonElement,
    providerName: 'UnstyledButton',
  });
});
