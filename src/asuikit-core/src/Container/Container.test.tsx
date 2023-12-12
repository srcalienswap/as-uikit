import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@asuikit/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsProviderVariant(Container, defaultProps, 'Container');
  itSupportsProviderSize(Container, defaultProps, 'Container');
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@asuikit/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  });
});
