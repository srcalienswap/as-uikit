import { createSafeContext } from '@asuikit/utils';
import type { MantineNumberSize } from '@asuikit/styles';

interface GridContextValue {
  gutter: MantineNumberSize;
  gutterXs: MantineNumberSize;
  gutterSm: MantineNumberSize;
  gutterMd: MantineNumberSize;
  gutterLg: MantineNumberSize;
  gutterXl: MantineNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createSafeContext<GridContextValue>(
  'Grid component was not found in tree'
);
