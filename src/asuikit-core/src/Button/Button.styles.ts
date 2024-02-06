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
  xs: { height: rem(28), paddingLeft: rem(14), paddingRight: rem(14) },
  sm: { height: rem(36), paddingLeft: rem(18), paddingRight: rem(18) },
  md: { height: rem(40), paddingLeft: rem(22), paddingRight: rem(22) },
  lg: { height: rem(48), paddingLeft: rem(26), paddingRight: rem(26) },
  xl: { height: rem(56), paddingLeft: rem(32), paddingRight: rem(32) },
  'compact-xs': { height: rem(22), paddingLeft: rem(7), paddingRight: rem(7) },
  'compact-sm': { height: rem(26), paddingLeft: rem(8), paddingRight: rem(8) },
  'compact-md': { height: rem(30), paddingLeft: rem(10), paddingRight: rem(10) },
  'compact-lg': { height: rem(34), paddingLeft: rem(12), paddingRight: rem(12) },
  'compact-xl': { height: rem(40), paddingLeft: rem(14), paddingRight: rem(14) },
};

export const button_radius = {
  xs: rem(4),
  sm: rem(4),
  md: rem(8),
  lg: rem(8),
  xl: rem(12),
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

  return {
    border: `${rem(1)} solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color,
    ...theme.fn.hover({ backgroundColor: colors.hover }),
  };
}

// eslint-disable-next-line consistent-return
function getVariantDisabledStyles({ variant, theme }: GetVariantStyles) {
  if (variant === 'outline') {
    return {
      backgroundColor: 'transparent',
      color: theme.colors.text[4],
      border: `1px solid ${theme.colors.line[3]}`,
    };
  }
  if (variant === 'subtle') {
    return {
      backgroundColor: 'transparent',
      color: theme.colors.text[4],
      border: 'none',
    };
  }
  return {};
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
      borderRadius: radius ? theme.fn.radius(radius) : button_radius[size],
      fontWeight: 600,
      position: 'relative',
      lineHeight: 1,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      userSelect: 'none',
      cursor: 'pointer',
      ...getVariantStyles({ variant, theme, color, gradient }),

      '&:active': theme.activeStyles,

      '&:disabled, &[data-disabled]': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        // color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        color: theme.colors.text[1],
        cursor: 'not-allowed',
        backgroundImage: 'none',
        pointerEvents: 'none',
        ...getVariantDisabledStyles({ variant, theme, color, gradient }),
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
          borderRadius: radius ? theme.fn.radius(radius) : button_radius[size],
          cursor: 'not-allowed',
        },
      },
    },

    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: theme.spacing.xs,
    },

    rightIcon: {
      marginLeft: theme.spacing.xs,
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
