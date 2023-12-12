import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@asuikit/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsProviderVariant(AspectRatio, defaultProps, 'AspectRatio');
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@asuikit/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  });
});
