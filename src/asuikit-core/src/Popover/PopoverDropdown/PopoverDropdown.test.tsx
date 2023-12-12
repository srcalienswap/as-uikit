import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@asuikit/tests';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';
import { Popover } from '../Popover';
import { POPOVER_ERRORS } from '../Popover.errors';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, { opened: true });

describe('@asuikit/core/PopoverDropdown', () => {
  itThrowsContextError(PopoverDropdown, defaultProps, POPOVER_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@asuikit/core/PopoverDropdown',
    providerName: 'PopoverDropdown',
  });
});
