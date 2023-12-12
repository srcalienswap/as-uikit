import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps = {
  children: 'test-center',
};

describe('@asuikit/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsProviderVariant(Center, defaultProps, 'Center');
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@asuikit/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  });
});
