import { createStyles, MantineShadow, MantineNumberSize, rem } from '@asuikit/styles';

export interface PopoverStylesParams {
  radius?: MantineNumberSize;
  shadow?: MantineShadow;
}

export default createStyles((theme, { radius, shadow }: PopoverStylesParams) => ({
  dropdown: {
    position: 'absolute',
    // backgroundColor: theme.white,
    backgroundColor: theme.colors.bg[2],
    border: `${rem(1)} solid ${theme.colors.line[1]}`,
    padding: theme.spacing.md,
    boxShadow: theme.shadows[shadow] || shadow || 'none',
    borderRadius: theme.fn.radius(radius),

    '&:focus': {
      outline: 0,
    },
  },

  arrow: {
    backgroundColor: 'inherit',
    border: `${rem(1)} solid ${theme.colors.line[1]}`,
    zIndex: 1,
  },
}));
