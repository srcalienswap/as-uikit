import React from 'react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@asuikit/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsProviderVariant(SimpleGrid, defaultProps, 'SimpleGrid');
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@asuikit/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  });
});
