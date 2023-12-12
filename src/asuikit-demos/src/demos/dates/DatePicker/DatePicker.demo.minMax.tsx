import React, { useState } from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

const code = `
import { useState } from 'react';
import { Group } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 8, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 10)}
        maxDate={new Date(2022, 1, 25)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
