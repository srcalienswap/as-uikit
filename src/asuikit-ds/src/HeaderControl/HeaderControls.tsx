import React from 'react';
import { DefaultProps, Group, Tooltip } from '@asuikit/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { DirectionControl } from './DirectionControl';
import { SearchControl } from '../SearchControl';

interface HeaderControlsProps extends DefaultProps {
  onSearch(): void;
  githubLink: string;
  direction: 'rtl' | 'ltr';
  toggleDirection(): void;
}

export function HeaderControls({
  onSearch,
  githubLink,
  direction,
  toggleDirection,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group spacing="xs" {...others}>
        <SearchControl onClick={onSearch} />
        {/* <DiscordControl /> */}
        {/* <GithubControl link={githubLink} /> */}
        <DirectionControl direction={direction} toggleDirection={toggleDirection} />
        <ColorSchemeControl />
      </Group>
    </Tooltip.Group>
  );
}
