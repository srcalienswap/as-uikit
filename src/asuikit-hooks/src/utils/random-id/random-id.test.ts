import { randomId } from './random-id';

describe('@asuikit/hooks/random-id', () => {
  it('returns random id with asuikit- prefix', () => {
    expect(randomId().includes('asuikit-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
