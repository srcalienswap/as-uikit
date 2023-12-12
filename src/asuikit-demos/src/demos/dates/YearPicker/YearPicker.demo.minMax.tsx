import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { YearPicker } from '@asuikit/dates';

const code = `
import { useState } from 'react';
import { Group } from '@asuikit/core';
import { YearPicker } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
