import { withPrefix } from 'gatsby';

export function removePathNamePrefix(pathname: string) {
  return `/${pathname.replace(withPrefix(''), '')}`;
}
