import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = {
  children: 'test',
};

describe('@asuikit/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsProviderVariant(Kbd, defaultProps, 'Kbd');
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@asuikit/core/Kbd',
    refType: HTMLElement,
    providerName: 'Kbd',
  });
});
