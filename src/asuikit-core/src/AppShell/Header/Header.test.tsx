import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@asuikit/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsProviderVariant(Header, defaultProps, 'Header');
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@asuikit/core/Header',
    refType: HTMLElement,
    providerName: 'Header',
  });
});
