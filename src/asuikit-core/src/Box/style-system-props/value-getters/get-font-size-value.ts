import { MantineTheme, getSize } from '@asuikit/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return getSize({ size, sizes: theme.fontSizes });
}
