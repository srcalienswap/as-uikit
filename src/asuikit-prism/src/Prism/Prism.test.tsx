import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@asuikit/tests';
import { Prism, PrismProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('@asuikit/prism/Prism', () => {
  itSupportsProviderVariant(Prism, defaultProps, 'Prism');
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: '@asuikit/prism/Prism',
    refType: HTMLDivElement,
  });

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.asuikit-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.asuikit-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.asuikit-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.asuikit-Prism-lineNumber')).toHaveLength(0);
  });

  it('renders pre element without top and bottom margin', () => {
    const { container: prism } = render(<Prism {...defaultProps} />);
    expect(prism.querySelector('.asuikit-Prism-code')).toHaveStyle({
      marginTop: 0,
      marginBottom: 0,
    });
  });
});
