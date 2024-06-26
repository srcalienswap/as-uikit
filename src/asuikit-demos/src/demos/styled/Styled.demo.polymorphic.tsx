import React from 'react';
import { Button, ButtonProps, createPolymorphicComponent, rem } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import styled from '@emotion/styled';

const code = `
import { Button, ButtonProps, createPolymorphicComponent } from '@asuikit/core';
import styled from '@emotion/styled';

const _StyledButton = styled(Button)\`
  border-width: ${rem(2)};
  color: \${({ theme }) => (theme.colorScheme === 'dark' ? theme.white : theme.black)};
\`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

function Demo() {
  return (
    <StyledButton variant="outline" color="gray" radius="md">
      This is styled button
    </StyledButton>
  );
}

`;

const _StyledButton = styled(Button)`
  border-width: ${rem(2)};
  color: ${({ theme }) => (theme.colorScheme === 'dark' ? theme.white : theme.black)};
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

function Demo() {
  return (
    <StyledButton variant="outline" color="gray" radius="md">
      This is styled button
    </StyledButton>
  );
}

export const polymorphic: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
