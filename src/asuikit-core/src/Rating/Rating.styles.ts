import { createStyles } from '@asuikit/styles';

export default createStyles(() => ({
  root: {
    display: 'flex',
    width: 'max-content',

    '&:has(input:disabled)': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },
  },

  symbolGroup: {
    position: 'relative',
    transition: 'transform 100ms ease',

    '&[data-active="true"]': {
      zIndex: 1,
      transform: 'scale(1.2)',
    },
  },
}));
