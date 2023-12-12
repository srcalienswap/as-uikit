import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select, Box } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Select clearable />
      <Select searchable clearable />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        clearable
        withinPortal
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />

      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        clearable
        searchable
        withinPortal
        mt="md"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </Box>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
