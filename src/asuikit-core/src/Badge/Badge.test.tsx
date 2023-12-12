import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {};

describe('@asuikit/core/Badge', () => {
  itRendersChildren(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsProviderVariant(Badge, defaultProps, 'Badge');
  itSupportsProviderSize(Badge, defaultProps, 'Badge');
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@asuikit/core/Badge',
    refType: HTMLDivElement,
  });

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(container.querySelector('.asuikit-Badge-rightSection').textContent).toBe('test-right');
    expect(container.querySelector('.asuikit-Badge-leftSection').textContent).toBe('test-left');
  });
});
