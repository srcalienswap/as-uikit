import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@asuikit/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@asuikit/core/Box', () => {
  itRendersChildren(Box as any, defaultProps);
  itIsPolymorphic(Box as any, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@asuikit/core/Box',
    refType: HTMLDivElement,
  });
});
