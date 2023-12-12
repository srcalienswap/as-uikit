import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@asuikit/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '50rem' }} />,
};

describe('@asuikit/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/Collapse',
    providerName: 'Collapse',
  });
});
