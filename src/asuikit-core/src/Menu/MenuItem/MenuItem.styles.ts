import { createStyles, MantineColor, MantineNumberSize } from '@asuikit/styles';

interface MenuItemStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
}

export default createStyles((theme, { color, radius }: MenuItemStylesParams) => ({
  item: {
    ...theme.fn.fontStyles(),
    WebkitTapHighlightColor: 'transparent',
    fontSize: theme.fontSizes.md,
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    width: '100%',
    textAlign: 'left',
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: '14px 8px',
    cursor: 'pointer',
    borderRadius: theme.fn.radius(radius),
    color: color
      ? theme.fn.variant({ variant: 'filled', primaryFallback: false, color }).background
      : theme.colors.text[1],
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      pointerEvents: 'none',
      userSelect: 'none',
    },

    '&[data-hovered]': {
      backgroundColor: color
        ? theme.fn.variant({ variant: 'light', color }).background
        : theme.colors.bg[3],
    },
  },

  itemLabel: {
    flex: 1,
  },

  itemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.xs,
  },

  itemRightSection: {},
}));
