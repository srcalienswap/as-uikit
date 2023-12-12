import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@asuikit/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsProviderVariant(Footer, defaultProps, 'Footer');
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@asuikit/core/Footer',
    refType: HTMLElement,
    providerName: 'Footer',
  });
});
