import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@asuikit/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps = {};

describe('@asuikit/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsProviderVariant(CardSection, defaultProps, 'Card', 'cardSection');
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@asuikit/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  });
});
