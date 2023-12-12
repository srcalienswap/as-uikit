import React from 'react';
import { Global } from '@emotion/react';
import type { MantineTheme, MantineSize } from './types';
import { rem, em } from './utils';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<MantineSize, number | string>,
  name: string,
  targetUnitConverter: typeof rem = rem
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--asuikit-${name}-${size}`] = targetUnitConverter(sizes[size]);
  });
}

export function MantineCssVariables({ theme }: { theme: MantineTheme }) {
  const variables: Record<string, string> = {
    '--asuikit-color-white': theme.white,
    '--asuikit-color-black': theme.black,
    '--asuikit-transition-timing-function': theme.transitionTimingFunction,
    '--asuikit-line-height': `${theme.lineHeight}`,
    '--asuikit-font-family': theme.fontFamily,
    '--asuikit-font-family-monospace': theme.fontFamilyMonospace,
    '--asuikit-font-family-headings': theme.headings.fontFamily,
    '--asuikit-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');
  assignSizeVariables(variables, theme.breakpoints, 'breakpoints', em);

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--asuikit-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--asuikit-${heading}-font-size`] = headings[heading].fontSize;
    variables[`--asuikit-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
