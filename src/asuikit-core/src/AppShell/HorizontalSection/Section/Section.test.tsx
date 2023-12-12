import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@asuikit/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps = {
  children: 'test-section',
};

describe('@asuikit/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);
  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@asuikit/core/Section',
    refType: HTMLDivElement,
  });
});
