import React from 'react';
import { SegmentedControlProps } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { SegmentedControlWrapper } from './Wrapper';

function Demo(props: SegmentedControlProps) {
  return (
    <>
      <SegmentedControlWrapper {...props} />
    </>
  );
}

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@asuikit/core';

function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const fullWidth: MantineDemo = {
  type: 'configurator',
  component: Demo,
  codeTemplate,
  configurator: [
    { name: 'fullWidth', type: 'boolean', defaultValue: false },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
  ],
};
