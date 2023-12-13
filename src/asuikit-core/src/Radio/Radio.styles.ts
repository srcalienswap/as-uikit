import { createStyles, MantineColor, getStylesRef, rem, getSize } from '@asuikit/styles';

export interface RadioStylesParams {
  color: MantineColor;
  transitionDuration: number;
  labelPosition: 'left' | 'right';
  error: boolean;
}

const sizes = {
  xs: rem(12),
  sm: rem(16),
  md: rem(20),
  lg: rem(24),
  xl: rem(30),
};

const iconSizes = {
  xs: rem(5),
  sm: rem(6),
  md: rem(8),
  lg: rem(10),
  xl: rem(14),
};

export default createStyles(
  (theme, { color, transitionDuration, labelPosition, error }: RadioStylesParams, { size }) => {
    const colors = theme.fn.variant({ variant: 'filled', color });
    const errorColor = theme.fn.variant({
      variant: 'filled',
      color: 'red.9',
    }).background;

    return {
      inner: {
        order: labelPosition === 'left' ? 2 : 1,
        position: 'relative',
        alignSelf: 'flex-start',
      },

      icon: {
        ref: getStylesRef('icon'),
        color:
          theme.colorScheme === 'dark' && color === 'grey' && !error
            ? theme.colors.grey[0]
            : theme.white,
        opacity: 0,
        transform: `scale(0.75) translateY(${rem(2)})`,
        transition: `opacity ${transitionDuration}ms ${theme.transitionTimingFunction}`,
        pointerEvents: 'none',
        width: getSize({ sizes: iconSizes, size }),
        height: getSize({ sizes: iconSizes, size }),
        position: 'absolute',
        top: `calc(50% - ${getSize({ sizes: iconSizes, size })} / 2)`,
        left: `calc(50% - ${getSize({ sizes: iconSizes, size })} / 2)`,
      },

      radio: {
        ...theme.fn.focusStyles(),
        backgroundColor: theme.colors.bg[1],
        border: `${rem(1)} solid ${error ? errorColor : theme.colors.grey[4]}`,
        position: 'relative',
        appearance: 'none',
        width: getSize({ sizes, size }),
        height: getSize({ sizes, size }),
        borderRadius: getSize({ sizes, size }),
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionProperty: 'background-color, border-color',
        transitionTimingFunction: theme.transitionTimingFunction,
        transitionDuration: `${transitionDuration}ms`,
        cursor: theme.cursorType,

        '&:checked': {
          background: error ? errorColor : colors.background,
          borderColor: error ? errorColor : colors.background,

          [`& + .${getStylesRef('icon')}`]: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },

        '&:disabled': {
          borderColor: theme.colors.grey[2],
          backgroundColor: theme.colors.bg[3],

          [`& + .${getStylesRef('icon')}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
          },
        },

        '&:disabled:checked': {
          borderColor: theme.fn.themeColor(color, 3),
          backgroundColor: theme.fn.themeColor(color, 3),

          [`& + .${getStylesRef('icon')}`]: {
            color: theme.fn.themeColor('white', 9),
          },
        },
      },

      labelWrapper: {
        fontSize: size in sizes ? getSize({ size, sizes: theme.fontSizes }) : undefined,
        lineHeight: size in sizes ? getSize({ size, sizes }) : undefined,
        // color: `${error ? 'red' : 'green'}`,
        color: 'inherit',
      },

      label: {
        [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: getSize({
          size,
          sizes: {
            xs: rem(6),
            sm: rem(8),
            md: rem(8),
            lg: rem(8),
            xl: rem(8),
          },
        }),
        '&[data-disabled]': {
          color: theme.colors.text[3],
        },
      },
    };
  }
);
