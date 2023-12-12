import { itSupportsSystemProps, itSupportsProviderVariant } from '@asuikit/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@asuikit/core/Table', () => {
  itSupportsProviderVariant(Table, defaultProps, 'Table');
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@asuikit/core/Table',
    refType: HTMLTableElement,
    providerName: 'Table',
  });
});
