import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@asuikit/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsProviderVariant(ScrollArea, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@asuikit/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  });
});

describe('@asuikit/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps);
  itSupportsProviderVariant(ScrollArea.Autosize, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@asuikit/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
