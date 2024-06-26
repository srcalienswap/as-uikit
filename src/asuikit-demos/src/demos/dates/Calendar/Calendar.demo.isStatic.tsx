import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { Group, Indicator } from '@asuikit/core';
import { Calendar } from '@asuikit/dates';

const code = `
import { Group, Indicator } from '@asuikit/core';
import { Calendar } from '@asuikit/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
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
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}

export const isStatic: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
