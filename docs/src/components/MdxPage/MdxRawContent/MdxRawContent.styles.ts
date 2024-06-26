import { createStyles, rem, em } from '@asuikit/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH, CONTENT_WIDTH } from '../settings';

export default createStyles((theme, { withToc }: { withToc: boolean }) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: `calc(${theme.spacing.xl} * 2)`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
    width: withToc ? `calc(100% - ${rem(TABLE_OF_CONTENTS_WIDTH)})` : '100%',
    maxWidth: rem(withToc ? CONTENT_WIDTH : CONTENT_WIDTH + TABLE_OF_CONTENTS_WIDTH),
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  tableOfContents: {
    flex: `0 0 ${rem(TABLE_OF_CONTENTS_WIDTH)}`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      display: 'none',
    },
  },
}));
