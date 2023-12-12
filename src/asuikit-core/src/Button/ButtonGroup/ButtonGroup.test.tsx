import { itSupportsSystemProps, itRendersChildren } from '@asuikit/tests';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@asuikit/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
