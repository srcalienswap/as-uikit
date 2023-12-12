import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@asuikit/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsProviderVariant(AvatarGroup, defaultProps, 'AvatarGroup');
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
