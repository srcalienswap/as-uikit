import type { NativeSelectStylesNames } from '@asuikit/core';
import { Input } from './Input.styles-api';
import { InputWrapper } from './InputWrapper.styles-api';

export const NativeSelect: Record<NativeSelectStylesNames, string> = {
  ...Input,
  ...InputWrapper,
};
