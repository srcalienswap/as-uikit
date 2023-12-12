import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Select } from '@asuikit/core';

const code = `
import { Select } from '@asuikit/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <Select
      data={data}
      label="Select with native scrollbars"
      placeholder="Dropdown with native scrollbars"
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
    <Select
      maw={320}
      mx="auto"
      data={data}
      label="Select with native scrollbars"
      placeholder="Dropdown with native scrollbars"
      dropdownComponent="div"
      withinPortal
    />
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
