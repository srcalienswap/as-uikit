export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('asuikit-scroll-lock', '');

  return tag;
}
