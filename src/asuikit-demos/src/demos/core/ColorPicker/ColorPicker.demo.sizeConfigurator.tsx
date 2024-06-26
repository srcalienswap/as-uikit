import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { DEFAULT_THEME, ColorPicker, ColorPickerProps } from '@asuikit/core';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="rgba"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      {...props}
    />
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@asuikit/core';

function Demo() {
  return <ColorPicker${props} />;
}
`;

export const sizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};
