import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@asuikit/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true });

describe('@asuikit/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
