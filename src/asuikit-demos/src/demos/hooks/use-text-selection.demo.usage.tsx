import React from 'react';
import { MantineDemo } from '@asuikit/ds';
import { useTextSelection } from '@asuikit/hooks';

const code = `
import { useTextSelection } from '@asuikit/hooks';
function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>
        Selected text: <b>{selection?.toString()}</b>
      </div>
    </>
  );
}

export const useTextSelectionUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
