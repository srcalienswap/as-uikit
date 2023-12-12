import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps = {};

describe('@asuikit/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsProviderVariant(Paper, defaultProps, 'Paper');
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@asuikit/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  });
});
