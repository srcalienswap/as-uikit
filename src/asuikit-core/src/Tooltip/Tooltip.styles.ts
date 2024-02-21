import {
  createStyles,
  CSSObject,
  MantineColor,
  MantineNumberSize,
  MantineTheme,
} from '@asuikit/styles';

export interface TooltipStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  width: number | 'auto';
  multiline: boolean;
}

function getColors(theme: MantineTheme, color?: MantineColor): CSSObject {
  if (!color) {
    return {
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[9],
      backgroundColor: theme.colors.grey[9],
      color: theme.colorScheme === 'dark' ? theme.black : theme.white,
    };
  }

  const colors = theme.fn.variant({ variant: 'filled', color, primaryFallback: false });

  return {
    backgroundColor: colors.background,
    color: colors.color,
  };
}

export default createStyles(
  (theme, { color, radius = 'md', width, multiline }: TooltipStylesParams) => ({
    tooltip: {
      ...theme.fn.fontStyles(),
      ...getColors(theme, color),
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.sm,
      borderRadius: theme.fn.radius(radius),
      padding: `${theme.spacing.xs}`,
      position: 'absolute',
      whiteSpace: multiline ? 'unset' : 'nowrap',
      pointerEvents: 'none',
      width,
    },

    arrow: {
      backgroundColor: 'inherit',
      border: 0,
      zIndex: 1,
    },
  })
);
