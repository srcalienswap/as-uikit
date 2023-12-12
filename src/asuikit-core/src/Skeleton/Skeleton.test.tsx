import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@asuikit/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsProviderVariant(Skeleton, defaultProps, 'Skeleton');
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@asuikit/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  });
});
