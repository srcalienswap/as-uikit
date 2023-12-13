import { createStyles, MantineColor, MantineNumberSize, rem } from '@asuikit/styles';

export interface NotificationStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  withTitle: boolean;
}

export default createStyles((theme, { color, radius, withTitle }: NotificationStylesParams) => {
  const _radius = theme.fn.radius(radius);
  const colors = theme.fn.variant({ variant: 'filled', color });

  return {
    closeButton: {
      alignSelf: 'flex-start',
      ...theme.fn.hover({
        backgroundColor: theme.colors.grey[0],
      }),
    },

    icon: {
      boxSizing: 'border-box',
      marginRight: theme.spacing.xs,
      width: rem(24),
      height: rem(24),
      // borderRadius: rem(28),
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      color: colors.background,
      fontSize: rem(24),
      svg: {
        width: rem(24),
        height: rem(24),
      },
      marginTop: 2,
      // color: colors.background,
      // color: theme.white,
    },

    root: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      padding: rem(16),

      // paddingLeft: rem(22),
      // paddingRight: theme.spacing.xs,
      // paddingTop: theme.spacing.xs,
      // paddingBottom: theme.spacing.xs,
      borderRadius: _radius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      boxShadow: theme.shadows.lg,

      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: rem(6),
        top: _radius,
        bottom: _radius,
        left: rem(4),
        borderRadius: _radius,
        backgroundColor: colors.background,
      },

      '&[data-with-icon]': {
        paddingLeft: rem(16),

        '&::before': {
          display: 'none',
        },
      },

      '&[data-with-border]': {
        border: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
    },

    body: {
      flex: 1,
      overflow: 'hidden',
      marginRight: theme.spacing.xs,
      marginTop: 2,
      lineHeight: rem(24),
    },

    loader: {
      marginRight: theme.spacing.xs,
      width: `${rem(24)} !important`,
      height: `${rem(24)} !important`,
      marginTop: 2,
    },

    title: {
      fontSize: rem(14),
      lineHeight: rem(24),
      // marginBottom: rem(2),
      marginBottom: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
      color: theme.colors.text[1],
      fontWeight: 600,
    },

    description: {
      color: withTitle
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6]
        : theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.black,
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };
});
