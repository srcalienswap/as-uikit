import { createStyles, CSSObject, MantineTheme, rem } from '@asuikit/styles';
import { TabsStylesParams } from '../Tabs.types';

interface TabStylesParams extends TabsStylesParams {
  withIcon: boolean;
  withRightSection: boolean;
  iconPosition: 'right' | 'left';
}

function getVariantStyles(
  theme: MantineTheme,
  { orientation, color, radius, inverted, placement }: TabStylesParams,
  variant: string
): CSSObject {
  const vertical = orientation === 'vertical';
  const filledScheme = theme.fn.variant({ color, variant: 'filled' });
  const radiusValue = rem(theme.fn.radius(radius));

  const borderRadius =
    orientation === 'vertical'
      ? placement === 'left'
        ? `${radiusValue} 0 0 ${radiusValue}`
        : ` 0 ${radiusValue} ${radiusValue} 0`
      : inverted
        ? `0 0 ${radiusValue} ${radiusValue}`
        : `${radiusValue} ${radiusValue} 0 0`;

  if (variant === 'default' || variant === 'subtle') {
    return {
      [vertical
        ? placement === 'left'
          ? 'borderRight'
          : 'borderLeft'
        : inverted
          ? 'borderTop'
          : 'borderBottom']: `${rem(2)} solid transparent`,
      [vertical
        ? placement === 'left'
          ? 'marginRight'
          : 'marginLeft'
        : inverted
          ? 'marginTop'
          : 'marginBottom']: rem(-1),
      // borderRadius,
      ...theme.fn.hover({
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        // borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        color: theme.colors.text[1],
      }),

      '&[data-active]': {
        borderColor: filledScheme.background,
        color: theme.colors.text[1],
        ...theme.fn.hover({ borderColor: filledScheme.background }),
      },
    };
  }

  if (variant === 'outline') {
    return {
      borderRadius,
      border: `${rem(1)} solid transparent`,
      [vertical
        ? placement === 'left'
          ? 'borderRight'
          : 'borderLeft'
        : inverted
          ? 'borderTop'
          : 'borderBottom']: 'none',

      '&[data-active]': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],

        '&::before': {
          content: '""',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          position: 'absolute',
          bottom: vertical ? 0 : inverted ? 'unset' : rem(-1),
          top: vertical ? 0 : inverted ? rem(-1) : 'unset',
          [vertical ? 'width' : 'height']: rem(1),
          right: vertical ? (placement === 'left' ? rem(-1) : 'unset') : 0,
          left: vertical ? (placement === 'left' ? 'unset' : rem(-1)) : 0,
        },
      },
    };
  }

  if (variant === 'pills') {
    return {
      borderRadius: theme.fn.radius(radius),
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),

      '&[data-active]': {
        backgroundColor: filledScheme.background,
        color: filledScheme.color,
        ...theme.fn.hover({ backgroundColor: filledScheme.background }),
      },
    };
  }

  return {};
}

export default createStyles((theme, params: TabStylesParams, { variant }) => ({
  tabLabel: {},

  tab: {
    color: theme.colors.text[3],
    fontWeight: 600,

    position: 'relative',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: params.withIcon ? theme.spacing.xs : undefined,
    paddingRight: params.withRightSection ? theme.spacing.xs : undefined,
    fontSize: theme.fontSizes.sm,
    whiteSpace: 'nowrap',
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: params.orientation === 'horizontal' ? 'center' : undefined,
    lineHeight: 1,

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      ...theme.fn.hover({ backgroundColor: 'transparent' }),
    },

    '&:focus': {
      zIndex: 1,
    },

    ...getVariantStyles(theme, params, variant),
  },

  tabRightSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    order: 2,
    '&:not(:only-child)': {
      marginLeft: rem(7),
    },
  },

  tabIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    order: params.iconPosition === 'right' ? 1 : 0,
    '&:not(:only-child)': {
      [params.iconPosition === 'right' ? 'marginLeft' : 'marginRight']: rem(7),
    },
  },
}));
