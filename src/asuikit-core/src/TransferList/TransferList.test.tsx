import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itDisablesInputInsideDisabledFieldset,
} from '@asuikit/tests';
import { TransferList, TransferListProps } from './TransferList';

const defaultProps: TransferListProps = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

describe('@asuikit/core/TransferList', () => {
  itSupportsProviderVariant(TransferList, defaultProps, 'TransferList', ['transferList']);
  itSupportsSystemProps({
    component: TransferList,
    props: defaultProps,
    displayName: '@asuikit/core/TransferList',
    refType: HTMLDivElement,
    providerName: 'TransferList',
  });
  itDisablesInputInsideDisabledFieldset(TransferList, defaultProps);
});
