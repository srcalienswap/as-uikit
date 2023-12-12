import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@asuikit/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsProviderVariant(Mark, defaultProps, 'Mark');
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@asuikit/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  });
});
