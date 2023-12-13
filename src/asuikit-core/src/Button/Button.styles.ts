import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  MantineGradient,
  CSSObject,
  getSize,
  rem,
} from '@asuikit/styles';
import { INPUT_SIZES } from '../Input';

export const BUTTON_VARIANTS = [
  'filled',
  'outline',
  'light',
  'white',
  'default',
  'subtle',
  'gradient',
];

export interface ButtonStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  fullWidth: boolean;
  compact: boolean;
  gradient: MantineGradient;
  withRightIcon: boolean;
  withLeftIcon: boolean;
}

export const sizes = {
  xs: { height: INPUT_SIZES.xs, paddingLeft: rem(14), paddingRight: rem(14) },
  sm: { height: INPUT_SIZES.sm, paddingLeft: rem(18), paddingRight: rem(18) },
  md: { height: INPUT_SIZES.md, paddingLeft: rem(22), paddingRight: rem(22) },
  lg: { height: INPUT_SIZES.lg, paddingLeft: rem(26), paddingRight: rem(26) },
  xl: { height: INPUT_SIZES.xl, paddingLeft: rem(32), paddingRight: rem(32) },
  'compact-xs': { height: rem(22), paddingLeft: rem(7), paddingRight: rem(7) },
  'compact-sm': { height: rem(26), paddingLeft: rem(8), paddingRight: rem(8) },
  'compact-md': { height: rem(30), paddingLeft: rem(10), paddingRight: rem(10) },
  'compact-lg': { height: rem(34), paddingLeft: rem(12), paddingRight: rem(12) },
  'compact-xl': { height: rem(40), paddingLeft: rem(14), paddingRight: rem(14) },
};

interface GetSizeStyles {
  compact: boolean;
  size: string | number;
  withLeftIcon: boolean;
  withRightIcon: boolean;
}

function getSizeStyles({ compact, size, withLeftIcon, withRightIcon }: GetSizeStyles): CSSObject {
  if (compact) {
    return sizes[`compact-${size}`];
  }

  const _sizes: (typeof sizes)[keyof typeof sizes] = sizes[size];

  if (!_sizes) {
    return {};
  }

  return {
    ..._sizes,
    paddingLeft: withLeftIcon ? `calc(${_sizes.paddingLeft}  / 1.5)` : _sizes.paddingLeft,
    paddingRight: withRightIcon ? `calc(${_sizes.paddingRight}  / 1.5)` : _sizes.paddingRight,
  };
}

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

interface GetVariantStyles {
  theme: MantineTheme;
  color: MantineColor;
  variant: string;
  gradient: MantineGradient;
}

function getVariantStyles({ variant, theme, color, gradient }: GetVariantStyles) {
  if (!BUTTON_VARIANTS.includes(variant)) {
    return null;
  }

  const colors = theme.fn.variant({ color, variant, gradient });

  if (variant === 'gradient') {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,
      ...theme.fn.hover({ backgroundSize: '200%' }),
    };
  }

  if (variant === 'light') {
    return {
      border: 0,
      backgroundColor: theme.fn.themeColor(color, 0),
      color: theme.fn.themeColor(color, 9),
      ...theme.fn.hover({ backgroundColor: theme.fn.themeColor(color, 1) }),
    };
  }

  if (variant === 'outline') {
    return {
      border: `1px solid ${theme.fn.themeColor(color, 9)}`,
      backgroundColor: 'transparent',
      color: theme.fn.themeColor(color, 9),
      ...theme.fn.hover({
        backgroundColor: color?.startsWith('grey')
          ? theme.fn.themeColor('grey', 9)
          : theme.fn.themeColor(color, 9),
        color: color?.startsWith('grey') ? theme.colors.grey[0] : theme.white,
      }),

      '&:disabled, &[data-disabled]': {
        backgroundColor: 'transparent',
        color: theme.colors.grey[3],
        border: `1px solid ${theme.colors.grey[3]}`,
      },
    };
  }

  if (variant === 'subtle') {
    return {
      border: 0,
      backgroundColor: 'transparent',
      color: theme.fn.themeColor(color, 9),
      ...theme.fn.hover({ backgroundColor: theme.fn.themeColor(color, 0) }),

      '&:disabled, &[data-disabled]': {
        backgroundColor: 'transparent',
        color: theme.colors.text[4],
      },

      '&[data-loading]': {
        pointerEvents: 'none',
        opacity: 0.6,

        '&::before': {
          content: '""',
          ...theme.fn.cover(rem(-1)),
          backgroundColor: 'transparent',
          cursor: 'not-allowed',
        },
      },
    };
  }

  // const special =
  //   (theme.colorScheme === 'dark' && color === 'white') ||
  //   (theme.colorScheme === 'light' && color === 'black');
  // const specialColor =
  //   theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.grey[0];

  return {
    border: `${rem(1)} solid ${colors.border}`,
    backgroundColor: colors.background,
    color: color?.startsWith('grey') ? theme.colors.grey[0] : colors.color,
    ...theme.fn.hover({ backgroundColor: colors.hover }),
  };
}

export default createStyles(
  (
    theme,
    {
      radius,
      fullWidth,
      compact,
      withLeftIcon,
      withRightIcon,
      color,
      gradient,
    }: ButtonStylesParams,
    { variant, size }
  ) => ({
    root: {
      ...getSizeStyles({ compact, size, withLeftIcon, withRightIcon }),
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      ...getWidthStyles(fullWidth),
      borderRadius: radius
        ? theme.fn.radius(radius)
        : getSize({
            size,
            sizes: {
              xs: rem(4),
              sm: rem(8),
              md: rem(8),
              lg: rem(12),
              xl: rem(12),
            },
          }),
      fontWeight: size === 'xs' ? 500 : 600,
      position: 'relative',
      lineHeight: 1,
      fontSize: getSize({
        size: size === 'xs' ? 'sm' : size,
        sizes: theme.fontSizes,
      }),
      userSelect: 'none',
      cursor: 'pointer',

      '&:active': theme.activeStyles,

      '&:disabled, &[data-disabled]': {
        borderColor: 'transparent',
        backgroundColor: theme.colors.grey[1],
        color: theme.colors.grey[4],
        cursor: 'not-allowed',
        backgroundImage: 'none',
        pointerEvents: 'none',

        '&:active': {
          transform: 'none',
        },
      },

      '&[data-loading]': {
        pointerEvents: 'none',

        '&::before': {
          content: '""',
          ...theme.fn.cover(rem(-1)),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.dark[7], 0.5)
              : 'rgba(255, 255, 255, .5)',
          borderRadius: theme.fn.radius(radius),
          cursor: 'not-allowed',
        },
      },

      ...getVariantStyles({ variant, theme, color, gradient }),
    },

    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: theme.spacing.sm,
    },

    rightIcon: {
      marginLeft: theme.spacing.xs,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      // height: getSize({ size, sizes: theme.fontSizes }),
      // marginLeft: 4,
    },

    centerLoader: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: 0.5,
    },

    inner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'visible',
    },

    label: {
      whiteSpace: 'nowrap',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    },
  })
);
