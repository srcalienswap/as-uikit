import { itSupportsSystemProps } from '@asuikit/tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('@asuikit/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@asuikit/core/ColorSlider',
    refType: HTMLDivElement,
  });
});
