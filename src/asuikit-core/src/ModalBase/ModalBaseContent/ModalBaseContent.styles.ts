import { createStyles } from '@asuikit/styles';

interface ModalBaseContentStylesParams {
  zIndex: number;
}

export default createStyles((theme, { zIndex }: ModalBaseContentStylesParams) => ({
  inner: {
    position: 'fixed',
    width: '100%',
    top: 0,
    bottom: 0,
    maxHeight: '100%',
    zIndex,
    pointerEvents: 'none',
  },

  content: {
    pointerEvents: 'all',
    backgroundColor: theme.colors.bg[3],
  },
}));
