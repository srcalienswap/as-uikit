import { createStyles, getSize } from '@asuikit/core';

export default createStyles((theme, _, { size }) => ({
  monthLevelGroup: {
    display: 'flex',

    '& [data-month-level]:not(:last-of-type)': {
      marginRight: getSize({ size, sizes: theme.spacing }),
    },
  },
}));
