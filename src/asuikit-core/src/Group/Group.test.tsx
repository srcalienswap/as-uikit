import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Group, GroupProps } from './Group';

const defaultProps: GroupProps = {};

describe('@asuikit/core/Group', () => {
  itRendersChildren(Group, defaultProps);
  itSupportsProviderVariant(Group, defaultProps, 'Group');
  itSupportsSystemProps({
    component: Group,
    props: defaultProps,
    displayName: '@asuikit/core/Group',
    refType: HTMLDivElement,
  });

  it('has no falsy children', () => {
    const children = [undefined, null, <div key="1" />];
    const { container } = render(<Group>{children}</Group>);
    expect(container.querySelectorAll('.asuikit-Group-root > *')).toHaveLength(1);
  });
});
