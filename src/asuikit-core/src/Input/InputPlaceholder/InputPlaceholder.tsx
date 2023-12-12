import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@asuikit/styles';
import { packSx } from '@asuikit/utils';
import { Box } from '../../Box';

export interface InputPlaceholderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'span'> {}

const defaultProps: Partial<InputPlaceholderProps> = {};

export const InputPlaceholder = forwardRef<HTMLSpanElement, InputPlaceholderProps>((props, ref) => {
  const { sx, ...others } = useComponentDefaultProps('InputPlaceholder', defaultProps, props);
  return (
    <Box
      component="span"
      sx={[(theme) => theme.fn.placeholderStyles(), ...packSx(sx)]}
      ref={ref}
      {...others}
    />
  );
});

InputPlaceholder.displayName = '@asuikit/core/InputPlaceholder';
