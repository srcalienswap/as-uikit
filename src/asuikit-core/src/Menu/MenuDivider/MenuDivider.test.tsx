import { itSupportsSystemProps, createContextContainer } from '@asuikit/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true });

describe('@asuikit/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@asuikit/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
