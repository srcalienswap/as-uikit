import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { createStyles } from '@asuikit/core';

const code = `
import { createStyles } from '@asuikit/core';

interface ButtonProps {
  color: 'blue' | 'purple';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius} radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="purple" radius={50} />
    </>
  );
}
`;

interface ButtonProps {
  color: 'blue' | 'purple';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius} radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="purple" radius={50} />
    </>
  );
}

export const createStylesParameters: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
