import React from 'react';
import { useForm } from '@asuikit/form';
import { TextInput, Button, Group, Box } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { randomId } from '@asuikit/hooks';

const code = `
import { useForm } from '@asuikit/form';
import { TextInput, Button, Group, Box } from '@asuikit/core';
import { randomId } from '@asuikit/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: \`\${randomId()}@test.com\`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </Box>
  );
}

export const setValues: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
