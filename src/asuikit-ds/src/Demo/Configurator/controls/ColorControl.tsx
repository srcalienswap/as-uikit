import React, { useMemo } from 'react';
import { Group, Input, useMantineTheme, ColorSwatch, CheckIcon, rem, Tooltip } from '@asuikit/core';
import { upperFirst } from '@asuikit/hooks';

interface ColorControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

const levels = new Array(10).fill(0);

export function ColorControl({ value, label, onChange, ...others }: ColorControlProps) {
  const theme = useMantineTheme();

  const primaryShade = useMemo(
    () => theme.primaryShade[theme.colorScheme] ?? theme.primaryShade,
    [theme.colorScheme, theme.primaryShade]
  );

  const colors = useMemo(
    () =>
      Object.keys(theme.colors).map((color) => {
        const variantColors = theme.fn.variant({ color, variant: 'filled' });
        return (
          <Tooltip label={color}>
            <ColorSwatch
              color={theme.colors[color][primaryShade]}
              component="button"
              key={color}
              onClick={() => onChange(color)}
              radius="sm"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: variantColors.color,
                flex: `1 0 calc(15% - ${rem(4)})`,
              }}
            >
              {(value === color || value.startsWith(`${color}.`)) && (
                <CheckIcon width={rem(12)} height={rem(12)} />
              )}
            </ColorSwatch>
          </Tooltip>
        );
      }),
    [value, theme.colorScheme]
  );

  const shades = useMemo(() => {
    const [color] = value.split('.');
    return levels.map((_, index) => {
      const colorWithShade = index === primaryShade ? color : `${color}.${index}`;
      const variantColors = theme.fn.variant({ color: colorWithShade, variant: 'filled' });
      return (
        <ColorSwatch
          color={theme.colors[color][index]}
          component="button"
          key={colorWithShade}
          onClick={() => onChange(colorWithShade)}
          radius="sm"
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: variantColors.color,
            flex: 1,
            fontSize: 14,
            height: 20,
          }}
        >
          {colorWithShade === value ? index : ''}
        </ColorSwatch>
      );
    });
  }, [value, theme.colorScheme]);

  return (
    <>
      <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
        <Group spacing={2} mt={5}>
          {colors}
        </Group>
        <Input.Wrapper
          styles={{
            label: {
              fontSize: 12,
              opacity: 0.7,
            },
          }}
          labelElement="div"
          label={upperFirst('Shades')}
        >
          <Group noWrap spacing={2} mt={3}>
            {shades}
          </Group>
        </Input.Wrapper>
      </Input.Wrapper>
    </>
  );
}

ColorControl.initialValue = 'blue';
