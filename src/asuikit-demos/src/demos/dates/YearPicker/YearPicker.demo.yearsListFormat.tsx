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
      <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}

export const yearsListFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
