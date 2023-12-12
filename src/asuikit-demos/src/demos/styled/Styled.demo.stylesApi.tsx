import React from 'react';
import { Slider, rem } from '@asuikit/core';
import { MantineDemo } from '@asuikit/ds';
import styled from '@emotion/styled';

const code = `
import { Slider } from '@asuikit/core';
import styled from '@emotion/styled';

const StyledSlider = styled(Slider)\`
  & .asuikit-Slider-bar {
    background-color: pink;
  }

  & .asuikit-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
\`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}
`;

const StyledSlider = styled(Slider)`
  & .asuikit-Slider-bar {
    background-color: pink;
  }

  & .asuikit-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
