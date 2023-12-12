import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@asuikit/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsProviderVariant(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsProviderSize(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@asuikit/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  });
});
