import { MANTINE_SIZES, useMantineTheme } from '@asuikit/styles';
import React from 'react';
import { TbCircleCheck } from 'react-icons/tb';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Group } from '../Group';
import { Badge } from './Badge';
import { CloseButton } from '../CloseButton';
import { ActionIcon } from '../ActionIcon';

export default { title: 'Badge' };

export function Colors() {
  const theme = useMantineTheme();
  const items = Object.keys(theme.colors).map((color) => (
    <Group mt="xl" key={color}>
      {color}
      <Badge color={color}>Filled</Badge>
      <Badge leftSection={<TbCircleCheck />} color={color}>
        Default
      </Badge>
      <Badge rightSection={<CloseButton size="1em" color={color} />} color={color}>
        Default
      </Badge>
      <Badge
        rightSection={
          <ActionIcon size="1em" color="inherit">
            <RiCloseCircleFill size="0.8em" />
          </ActionIcon>
        }
        color={color}
      >
        Default
      </Badge>
      <Badge color={color} variant="default">
        Default
      </Badge>

      <Badge color={color} variant="white">
        White
      </Badge>
      <Badge color={color} variant="light">
        Light
      </Badge>
      <Badge color={color} variant="outline">
        Outline
      </Badge>
      <Badge color={color} variant="gradient">
        Gradient
      </Badge>
    </Group>
  ));

  return <div style={{ padding: 40 }}>{items}</div>;
}

export function Variants() {
  return (
    <Group p={40}>
      <Badge variant="light">Light</Badge>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Dot</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="gradient" gradient={{ deg: 30, from: 'red', to: 'orange' }}>
        Custom gradient
      </Badge>
      <Badge variant="gradient" gradient={{ deg: 115, from: '#FC00CF', to: '#CCFFEF' }}>
        hex gradient
      </Badge>
    </Group>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Badge unstyled leftSection="$$">
        Unstyled badge
      </Badge>
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Badge component="a" href="https://srcalienswap.github.io/as-uikit/">
        Anchor
      </Badge>

      <Badge component="button" type="button">
        Button
      </Badge>
    </div>
  );
}

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <Badge color="purple.2" variant="dot">
        Anchor
      </Badge>
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Badge size={size} key={size}>
      Badge {size}
    </Badge>
  ));

  return <div style={{ padding: 40, display: 'flex', gap: 40 }}>{sizes}</div>;
}
