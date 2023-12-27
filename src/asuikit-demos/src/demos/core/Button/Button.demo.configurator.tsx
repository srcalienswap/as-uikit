import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Button, ButtonProps, Group } from '@asuikit/core';
import { IconBrandTwitter } from '@tabler/icons-react';

function Wrapper(props: ButtonProps & { icon: string }) {
  const { icon, ...buttonProps } = props;
  if (icon === 'left' || icon === 'both') {
    buttonProps.leftIcon = <IconBrandTwitter />;
  }
  if (icon === 'right' || icon === 'both') {
    buttonProps.rightIcon = <IconBrandTwitter />;
  }

  return (
    <Group position="center">
      <Button {...buttonProps} />
    </Group>
  );
}

function replaceProps(props: string) {
  return props
    .replaceAll('icon="none"', '')
    .replaceAll('icon="left"', 'leftIcon={<IconBrandTwitter />}')
    .replaceAll('icon="right"', 'rightIcon={<IconBrandTwitter />}')
    .replaceAll('icon="both"', 'rightIcon={<IconBrandTwitter />} leftIcon={<IconBrandTwitter />}');
}

const codeTemplate = (props: string, children: string) => `
import { Button } from '@asuikit/core';

function Demo() {
  return (
    <Button${replaceProps(props)}>
      ${children}
    </Button>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
        { label: 'subtle', value: 'subtle' },
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'icon',
      type: 'select',
      data: [
        { label: 'none', value: 'none' },
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'both', value: 'both' },
      ],
      initialValue: 'none',
      defaultValue: 'none',
    },
    { name: 'children', type: 'string', initialValue: 'Settings' },
  ],
  // configuratorProps: {
  //   filter: ['icon'],
  // },
};
