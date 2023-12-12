import React from 'react';
import { createStyles, Menu, Group } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu, createStyles } from '@asuikit/core';

const useStyles = createStyles((theme) => ({
  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu content... */}
    </Menu>
  );
}
`;

const useStyles = createStyles((theme) => ({
  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Group position="center">
      <Menu classNames={classes}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
