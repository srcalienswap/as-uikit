import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#fff',
};

describe('@asuikit/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps);
  itSupportsProviderVariant(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsProviderSize(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@asuikit/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  });
});
