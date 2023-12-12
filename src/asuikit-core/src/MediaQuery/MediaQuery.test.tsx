import React from 'react';
import { itSupportsClassName } from '@asuikit/tests';
import { MediaQuery, MediaQueryProps } from './MediaQuery';

const defaultProps: MediaQueryProps = {
  styles: { fontWeight: 700 },
  children: <span>test-children</span>,
};

describe('@asuikit/core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toStrictEqual('@asuikit/core/MediaQuery');
  });
});
