import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { Burger, BurgerProps } from './Burger';

const defaultProps: BurgerProps = {
  opened: true,
  title: 'Close navigation',
};

describe('@asuikit/core/Burger', () => {
  checkAccessibility([<Burger {...defaultProps} />]);
  itSupportsFocusEvents(Burger, defaultProps, 'button');
  itSupportsProviderVariant(Burger, defaultProps, 'Burger');
  itSupportsProviderSize(Burger, defaultProps, 'Burger');
  itSupportsSystemProps({
    component: Burger,
    props: defaultProps,
    displayName: '@asuikit/core/Burger',
    refType: HTMLButtonElement,
    providerName: 'Burger',
  });

  it('renders cross when opened prop is true', () => {
    const { container: opened } = render(<Burger opened />);
    const { container: closed } = render(<Burger opened={false} />);
    expect(opened.querySelectorAll('[data-opened]')).toHaveLength(1);
    expect(closed.querySelectorAll('[data-opened]')).toHaveLength(0);
  });
});
