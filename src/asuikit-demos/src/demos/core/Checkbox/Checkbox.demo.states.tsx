import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Checkbox, Stack } from '@asuikit/core';

const code = `
import { Checkbox } from '@asuikit/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked indeterminate label="Indeterminate checked checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
