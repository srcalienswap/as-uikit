import { MANTINE_CORE_CATEGORIES, MANTINE_CORE_ORDER } from './asuikit-core';
import { MANTINE_HOOKS_ORDER, MANTINE_HOOKS_CATEGORIES } from './asuikit-hooks';

export const MANTINE_HOOKS_CATEGORIZED = {
  group: 'asuikit-hooks',
  categories: MANTINE_HOOKS_CATEGORIES,
  order: MANTINE_HOOKS_ORDER,
};

export const MANTINE_CORE_CATEGORIZED = {
  group: 'asuikit-core',
  categories: MANTINE_CORE_CATEGORIES,
  order: MANTINE_CORE_ORDER,
};

export const CATEGORIZED = [
  { group: 'theming', categories: {}, order: [] },
  { group: 'styles', categories: {}, order: [] },
  { group: 'guides', categories: {}, order: [] },
  MANTINE_HOOKS_CATEGORIZED,
  { group: 'asuikit-form', categories: {}, order: [] },
  MANTINE_CORE_CATEGORIZED,
  { group: 'asuikit-dates', categories: {}, order: [] },
  { group: 'Other packages', categories: {}, order: [] },
  { group: 'changelog', categories: {}, order: [] },
];
