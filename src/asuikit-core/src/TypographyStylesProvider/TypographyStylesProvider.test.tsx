import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('@asuikit/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsProviderVariant(TypographyStylesProvider, defaultProps, 'TypographyStylesProvider');
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@asuikit/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
