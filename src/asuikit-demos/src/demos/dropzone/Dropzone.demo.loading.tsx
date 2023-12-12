import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@asuikit/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
