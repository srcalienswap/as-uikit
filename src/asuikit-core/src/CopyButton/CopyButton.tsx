/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useClipboard } from '@asuikit/hooks';
import { useComponentDefaultProps } from '@asuikit/styles';

export interface CopyButtonProps {
  /** Function called with current status */
  children(payload: { copied: boolean; copy(): void }): React.ReactNode;

  /** Value that should be copied to the clipboard */
  value: string;

  /** Copied status timeout in ms */
  timeout?: number;
}

const defaultProps: Partial<CopyButtonProps> = {
  timeout: 1000,
};

export function CopyButton(props: CopyButtonProps) {
  const { children, timeout, value, ...others } = useComponentDefaultProps(
    'CopyButton',
    defaultProps,
    props
  );
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);
  return <>{children({ copy, copied: clipboard.copied, ...others })}</>;
}

CopyButton.displayName = '@asuikit/core/CopyButton';
