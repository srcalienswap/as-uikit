import React from 'react';
import { Text } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import { useDocumentTitle, useDocumentVisibility } from '@asuikit/hooks';

const code = `
import { Text } from '@asuikit/core';
import { useDocumentTitle, useDocumentVisibility } from '@asuikit/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
