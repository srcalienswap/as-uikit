import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Code, CodeProps } from './Code';

const defaultProps: CodeProps = {
  children: 'test-code',
};

describe('@asuikit/core/Code', () => {
  itRendersChildren(Code, defaultProps);
  itSupportsProviderVariant(Code, defaultProps, 'Code');
  itSupportsSystemProps({
    component: Code,
    props: defaultProps,
    displayName: '@asuikit/core/Code',
    refType: HTMLElement,
    providerName: 'Code',
  });

  it('renders code element for inline code and pre element for block', () => {
    const { container: inline } = render(<Code>Code</Code>);
    const { container: block } = render(<Code block>Code</Code>);
    expect(inline.querySelector('code')).toBeInTheDocument();
    expect(block.querySelector('pre')).toBeInTheDocument();
  });
});
