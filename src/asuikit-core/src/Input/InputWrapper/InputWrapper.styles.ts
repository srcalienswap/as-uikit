import { createStyles } from '@asuikit/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },
}));
