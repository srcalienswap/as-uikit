/* eslint-disable no-console */
import React from 'react';
import { PasswordInput, Group, Button, Box } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useForm } from '@asuikit/form';

const code = `
import { useForm } from '@asuikit/form';
import { PasswordInput, Group, Button, Box } from '@asuikit/core';

function Demo() {
  const form = useForm({
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export const password: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
