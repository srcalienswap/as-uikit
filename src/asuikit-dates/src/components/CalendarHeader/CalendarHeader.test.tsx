import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import { itSupportsHeaderProps, itSupportsWithNextPrevious } from '../../tests';
import { CalendarHeader, CalendarHeaderProps } from './CalendarHeader';

const defaultProps: CalendarHeaderProps = {
  nextLabel: 'next',
  previousLabel: 'prev',
  label: '',
};

describe('@asuikit/dates/CalendarHeader', () => {
  itSupportsSystemProps({
    component: CalendarHeader,
    props: defaultProps,
    refType: HTMLDivElement,
    providerName: 'CalendarHeader',
    displayName: '@asuikit/dates/CalendarHeader',
  });

  itSupportsProviderVariant(CalendarHeader, defaultProps, 'CalendarHeader', 'calendarHeader');
  itSupportsProviderSize(CalendarHeader, defaultProps, 'CalendarHeader', 'calendarHeader');
  itSupportsHeaderProps(CalendarHeader, defaultProps);
  itSupportsWithNextPrevious(CalendarHeader, defaultProps);

  it('renders given label', () => {
    render(<CalendarHeader {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports levelControlAriaLabel', () => {
    render(
      <CalendarHeader {...defaultProps} label="test-label" levelControlAriaLabel="Change month" />
    );

    expect(screen.getByText('test-label')).toHaveAttribute('aria-label', 'Change month');
  });

  it('has correct default __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} />);
    expect(screen.getByLabelText('next')).toHaveClass(
      'asuikit-CalendarHeader-calendarHeaderControl'
    );
  });

  it('supports custom __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByLabelText('next')).toHaveClass('asuikit-Calendar-calendarHeaderControl');
  });

  it('supports styles api (styles)', () => {
    render(
      <CalendarHeader
        {...defaultProps}
        styles={{ calendarHeaderControl: { borderColor: '#CECECE' } }}
      />
    );

    expect(screen.getByLabelText('next')).toHaveStyle({ borderColor: '#CECECE' });
  });

  it('supports styles api (classNames)', () => {
    render(
      <CalendarHeader {...defaultProps} classNames={{ calendarHeaderControl: 'test-control' }} />
    );
    expect(screen.getByLabelText('next')).toHaveClass('test-control');
  });
});
