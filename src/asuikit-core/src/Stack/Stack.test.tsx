import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@asuikit/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsProviderVariant(Stack, defaultProps, 'Stack');
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@asuikit/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  });
});
