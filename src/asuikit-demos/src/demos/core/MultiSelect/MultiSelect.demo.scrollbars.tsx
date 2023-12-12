import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { MultiSelect } from '@asuikit/core';

const code = `
import { MultiSelect } from '@asuikit/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="MultiSelect with native scrollbars"
      placeholder="Dropdown rendered as div element"
      dropdownComponent="div"
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
  return (
    <MultiSelect
      maw={320}
      mx="auto"
      data={data}
      label="MultiSelect with native scrollbars"
      placeholder="Dropdown rendered as div element"
      dropdownComponent="div"
    />
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
