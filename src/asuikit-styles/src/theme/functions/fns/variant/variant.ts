import { CSSProperties } from 'react';
import type { MantineColor, MantineGradient, MantineThemeBase } from '../../../types';
import { rgba } from '../rgba/rgba';
import { themeColor } from '../theme-color/theme-color';
import { primaryShade } from '../primary-shade/primary-shade';
import { gradient } from '../gradient/gradient';

export interface VariantInput {
  variant: string;
  color?: MantineColor;
  gradient?: MantineGradient;
  primaryFallback?: boolean;
}

export interface VariantOutput {
  border: CSSProperties['borderColor'];
  background: CSSProperties['backgroundColor'];
  color: CSSProperties['color'];
  hover: CSSProperties['backgroundColor'];
}

interface ColorInfo {
  isSplittedColor: boolean;
  key?: string;
  shade?: number;
}

function getColorIndexInfo(color: string, theme: MantineThemeBase): ColorInfo {
  if (typeof color === 'string' && color.includes('.')) {
    const [splittedColor, _splittedShade] = color.split('.');
    const splittedShade = parseInt(_splittedShade, 10);

    if (splittedColor in theme.colors && splittedShade >= 0 && splittedShade < 10) {
      return { isSplittedColor: true, key: splittedColor, shade: splittedShade };
    }
  }

  return { isSplittedColor: false };
}

const hexToLuma = (color) => {
  const hex = color.replace(/#/, '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return [0.299 * r, 0.587 * g, 0.114 * b].reduce((x, y) => x + y) / 255;
};

const isHightLuma = (color) => hexToLuma(color) > 0.5;

export function variant(theme: MantineThemeBase) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);
  const getGradient = gradient(theme);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color, gradient, primaryFallback }: VariantInput): VariantOutput => {
    const colorInfo = getColorIndexInfo(color, theme);

    switch (variant) {
      case 'light': {
        return {
          border: 'transparent',
          background: rgba(
            getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0, primaryFallback, false),
            theme.colorScheme === 'dark' ? 0.2 : 1
          ),
          color:
            color === 'dark'
              ? theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.dark[9]
              : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
          hover: rgba(
            getThemeColor(color, theme.colorScheme === 'dark' ? 7 : 1, primaryFallback, false),
            theme.colorScheme === 'dark' ? 0.25 : 0.65
          ),
        };
      }

      case 'subtle': {
        return {
          border: 'transparent',
          background: 'transparent',
          color:
            color === 'dark'
              ? theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.dark[9]
              : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
          hover: rgba(
            getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0, primaryFallback, false),
            theme.colorScheme === 'dark' ? 0.2 : 1
          ),
        };
      }

      case 'outline': {
        return {
          border: getThemeColor(color, theme.colorScheme === 'dark' ? 5 : getPrimaryShade('light')),
          background: 'transparent',
          color: getThemeColor(color, theme.colorScheme === 'dark' ? 5 : getPrimaryShade('light')),
          hover:
            theme.colorScheme === 'dark'
              ? rgba(getThemeColor(color, 5, primaryFallback, false), 0.05)
              : rgba(getThemeColor(color, 0, primaryFallback, false), 0.35),
        };
      }

      case 'default': {
        return {
          border: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
          background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          hover: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        };
      }

      case 'white': {
        return {
          border: 'transparent',
          background: theme.white,
          color: getThemeColor(color, getPrimaryShade()),
          hover: null,
        };
      }

      case 'transparent': {
        return {
          border: 'transparent',
          color:
            color === 'dark'
              ? theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.dark[9]
              : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
          background: 'transparent',
          hover: null,
        };
      }

      case 'gradient': {
        return {
          background: getGradient(gradient),
          color: theme.white,
          border: 'transparent',
          hover: null,
        };
      }

      default: {
        const _primaryShade = getPrimaryShade();
        const _shade = colorInfo.isSplittedColor ? colorInfo.shade : _primaryShade;
        const _color = colorInfo.isSplittedColor ? colorInfo.key : color;
        const bgColor = getThemeColor(_color, _shade, primaryFallback);
        const textColor = isHightLuma(bgColor)
          ? theme.colors.grey[theme.colorScheme === 'dark' ? 0 : 9]
          : theme.colors.grey[theme.colorScheme === 'dark' ? 9 : 0];

        return {
          border: 'transparent',
          background: bgColor,
          color: textColor,
          hover: getThemeColor(_color, _shade === 9 ? 8 : _shade + 1),
        };
      }
    }
  };
}
