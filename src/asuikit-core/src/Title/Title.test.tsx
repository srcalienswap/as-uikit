import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@asuikit/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsProviderVariant(Title, defaultProps, 'Title');
  itSupportsProviderSize(Title, defaultProps, 'Title');
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@asuikit/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  });
});
