import React from 'react';
import { MultiSelect, Box } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@asuikit/core';

function Demo() {
  return <MultiSelect disabled />;
}
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <MultiSelect
        data={data}
        label="Disabled without value"
        placeholder="Won't pick anything"
        disabled
        defaultValue={[]}
      />

      <MultiSelect
        mt="md"
        data={data}
        label="Disabled with values"
        placeholder="Won't pick anything"
        disabled
        defaultValue={['react', 'vue']}
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
