import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { useMantineTheme, Breadcrumbs, Anchor } from '@asuikit/core';

const code = `
import { Breadcrumbs, Anchor } from '@asuikit/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  const theme = useMantineTheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
