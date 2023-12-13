import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  getStylesRef,
  rem,
  getSize,
} from '@asuikit/styles';

const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(30),
  xl: rem(36),
};

export interface CheckboxStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
  transitionDuration: number;
  labelPosition: 'left' | 'right';
  error: boolean;
  indeterminate: boolean;
}

export default createStyles(
  (
    theme,
    {
      radius,
      color,
      transitionDuration,
      labelPosition,
      error,
      indeterminate,
    }: CheckboxStylesParams,
    { size }
  ) => {
    const _size = getSize({ size, sizes });
  const colors = theme.fn.variant({ variant: 'filled', color });
  const errorColor = theme.fn.variant({
    variant: 'filled',
    color: 'red',
  }).background;

  return {
    icon: {
      ...theme.fn.cover(),
      ref: getStylesRef('icon'),
      color:
        theme.colorScheme === 'dark' && color === 'grey' && !error
          ? theme.colors.grey[0]
          : theme.white,
      transform: indeterminate ? 'none' : `translateY(${rem(5)}) scale(0.5)`,
      opacity: indeterminate ? 1 : 0,
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'ease',
      transitionDuration: `${transitionDuration}ms`,
      pointerEvents: 'none',
      width: '50%',
      position: 'absolute',
      zIndex: 1,
      margin: 'auto',

      '@media (prefers-reduced-motion)': {
        transitionDuration: theme.respectReducedMotion ? '0ms' : undefined,
      },
    },

    inner: {
      position: 'relative',
      width: _size,
      height: _size,
      order: labelPosition === 'left' ? 2 : 1,
    },

    labelWrapper: {
      fontSize:
        size in sizes ? getSize({ size, sizes: theme.fontSizes }) : undefined,
      lineHeight: size in sizes ? getSize({ size, sizes }) : undefined,
      // color: `${error ? 'red' : 'green'}`,
      color: 'inherit',
    },

    input: {
      ...theme.fn.focusStyles(),
      appearance: 'none',
      // backgroundColor: indeterminate
      //   ? colors.background
      //   : theme.colorScheme === 'dark'
      //   ? theme.colors.dark[6]
      //   : theme.white,
      backgroundColor: indeterminate ? colors.background : theme.colors.bg[1],
      border: `${rem(1)} solid ${
        error
          ? errorColor
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[4]
      }`,
      // border: 'none',
      width: _size,
      height: _size,
      borderRadius: theme.fn.radius(radius),
      padding: 0,
      display: 'block',
      margin: 0,
      transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,
      cursor: theme.cursorType,

      '&:checked': {
        // backgroundColor: error ? errorColors.background : colors.background,
        backgroundColor: error ? errorColor : colors.background,
        borderColor: error ? errorColor : colors.background,

        [`& + .${getStylesRef('icon')}`]: {
          opacity: 1,
          color:
            theme.colorScheme === 'dark' && color === 'grey' && !error
              ? theme.colors.grey[0]
              : theme.white,
          transform: 'translateY(0) scale(1)',
        },
      },

      '&:disabled': {
        backgroundColor: theme.colors.bg[3],
        // theme.colorScheme === 'dark'
        //   ? theme.colors.dark[4]
        //   : theme.colors.gray[2],
        borderColor: theme.colors.grey[2],
        // theme.colorScheme === 'dark'
        //   ? theme.colors.dark[6]
        //   : theme.colors.gray[3],
        cursor: 'not-allowed',

        [`& + .${getStylesRef('icon')}`]: {
          color: theme.colors.grey[2],
          // theme.colorScheme === 'dark'
          //   ? theme.colors.dark[6]
          //   : theme.colors.gray[5],
        },
      },
    },

    label: {
      [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: getSize({
        size,
        sizes: {
          xs: rem(6),
          sm: rem(6),
          md: rem(8),
          lg: rem(8),
          xl: rem(8),
        },
      }),
      '&[data-disabled]': {
        color: theme.colors.text[3],
      },
      // color: error ? 'green' : theme.colors.grey[9],
    },
  };
  }
);
