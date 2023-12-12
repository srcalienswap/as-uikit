import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Navbar, NavbarProps } from './Navbar';
import { Section } from '../HorizontalSection/Section/Section';

const defaultProps: NavbarProps = { children: 'test-navbar' };

describe('@asuikit/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsProviderVariant(Navbar, defaultProps, 'Navbar');
  itSupportsSystemProps({
    component: Navbar,
    props: defaultProps,
    displayName: '@asuikit/core/Navbar',
    refType: HTMLElement,
    providerName: 'Navbar',
  });

  it('exposes Section as Navbar.Section', () => {
    expect(Navbar.Section).toBe(Section);
  });
});
