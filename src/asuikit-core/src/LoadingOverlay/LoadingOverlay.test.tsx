import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@asuikit/tests';
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@asuikit/core/LoadingOverlay', () => {
  itSupportsProviderVariant(LoadingOverlay, defaultProps, 'LoadingOverlay');
  itSupportsSystemProps({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@asuikit/core/LoadingOverlay',
    refType: HTMLDivElement,
    providerName: 'LoadingOverlay',
  });

  it('renders based on visible prop', () => {
    const { container: notVisible } = render(<LoadingOverlay visible={false} />);
    const { container: visible } = render(<LoadingOverlay visible />);
    expect(notVisible.querySelector('.asuikit-LoadingOverlay-root')).toBe(null);
    expect(visible.querySelector('.asuikit-LoadingOverlay-root')).toBeInTheDocument();
  });
});
