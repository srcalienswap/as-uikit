import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group, Indicator } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

const code = `
import { Group, Indicator } from '@asuikit/core';
import { DatePicker } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}

export const renderDay: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
