import { primaryColor } from './primary-color';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@asuikit/tss/primary-color', () => {
  it('returns primary color for given color scheme', () => {
    expect(primaryColor(DEFAULT_THEME)()).toBe(DEFAULT_THEME.colors.purple[9]);
    expect(primaryColor(DEFAULT_THEME)('light')).toBe(DEFAULT_THEME.colors.purple[9]);
    expect(primaryColor(DEFAULT_THEME)('dark')).toBe(DEFAULT_THEME.colors.purple[9]);
  });
});
