import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { Divider, DividerProps } from './Divider';

const defaultProps: DividerProps = {};

describe('@asuikit/core/Divider', () => {
  itSupportsProviderVariant(Divider, defaultProps, 'Divider');
  itSupportsProviderSize(Divider, defaultProps, 'Divider');
  itSupportsSystemProps({
    component: Divider,
    props: defaultProps,
    displayName: '@asuikit/core/Divider',
    refType: HTMLDivElement,
  });

  it('renders given label in horizontal orientation', () => {
    render(<Divider label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const { container } = render(<Divider label="test-label" orientation="vertical" />);
    expect(container.querySelectorAll('.asuikit-Divider-label')).toHaveLength(0);
  });
});
