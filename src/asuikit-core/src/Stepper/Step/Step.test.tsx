import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@asuikit/tests';
import { render } from '@testing-library/react';
import { Step, StepProps } from './Step';

const defaultProps: StepProps = {};

describe('@asuikit/core/Step', () => {
  checkAccessibility([<Step aria-label="Test" />, <Step title="Test" />, <Step label="Test" />]);
  itSupportsSystemProps({
    component: Step,
    props: defaultProps,
    displayName: '@asuikit/core/Step',
    refType: HTMLButtonElement,
    providerName: 'StepperStep',
  });

  it('renders icon when withIcon is true', () => {
    const { container: withIcon } = render(<Step withIcon />);
    const { container: withoutIcon } = render(<Step withIcon={false} />);
    expect(withIcon.querySelectorAll('.asuikit-Step-stepIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.asuikit-Step-stepIcon')).toHaveLength(0);
  });

  it('renders step body if Step has label or description', () => {
    const { container: withLabel } = render(<Step label="test-label" />);
    const { container: withDescription } = render(<Step description="test-description" />);
    const { container: withoutBody } = render(<Step />);

    expect(withoutBody.querySelectorAll('.asuikit-Step-stepBody')).toHaveLength(0);
    expect(withLabel.querySelector('.asuikit-Step-stepLabel').textContent).toBe('test-label');
    expect(withDescription.querySelector('.asuikit-Step-stepDescription').textContent).toBe(
      'test-description'
    );
  });

  it('sets button tabIndex based on allowStepClick prop', () => {
    const { container: interactive } = render(<Step allowStepClick />);
    const { container: nonInteractive } = render(<Step allowStepClick={false} />);
    expect(interactive.firstChild).toHaveAttribute('tabindex', '0');
    expect(nonInteractive.firstChild).toHaveAttribute('tabindex', '-1');
  });
});
