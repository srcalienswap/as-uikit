import 'dayjs/locale/ru';
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@asuikit/tests';
import {
  itSupportsGetControlRef,
  itSupportsMonthsListProps,
  itSupportsOnControlKeydown,
  itSupportsOnControlClick,
  itSupportsOnControlMouseEnter,
} from '../../tests';
import { MonthsList, MonthsListProps } from './MonthsList';

const defaultProps: MonthsListProps = {
  year: new Date(2022, 3, 11),
};

describe('@asuikit/dates/MonthsList', () => {
  itSupportsSystemProps({
    component: MonthsList,
    props: defaultProps,
    refType: HTMLTableElement,
    providerName: 'MonthsList',
    displayName: '@asuikit/dates/MonthsList',
  });

  itSupportsProviderSize(MonthsList, defaultProps, 'MonthsList', ['monthsList', 'pickerControl']);
  itSupportsProviderVariant(MonthsList, defaultProps, 'MonthsList', [
    'monthsList',
    'pickerControl',
  ]);

  itSupportsGetControlRef(MonthsList, 12, defaultProps);
  itSupportsMonthsListProps(MonthsList, defaultProps);
  itSupportsOnControlKeydown(MonthsList, defaultProps);
  itSupportsOnControlClick(MonthsList, defaultProps);
  itSupportsOnControlMouseEnter(MonthsList, defaultProps);

  it('has correct default __staticSelector', () => {
    render(<MonthsList {...defaultProps} />);
    expect(screen.getByRole('table')).toHaveClass('asuikit-MonthsList-monthsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('asuikit-MonthsList-pickerControl');
  });

  it('supports custom __staticSelector', () => {
    render(<MonthsList {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('table')).toHaveClass('asuikit-Calendar-monthsList');
    expect(screen.getAllByRole('button')[0]).toHaveClass('asuikit-Calendar-pickerControl');
  });

  it('supports styles api (styles)', () => {
    render(
      <MonthsList
        {...defaultProps}
        styles={{
          monthsList: { borderColor: '#331156' },
          pickerControl: { borderColor: '#123123' },
        }}
      />
    );

    expect(screen.getByRole('table')).toHaveStyle({ borderColor: '#331156' });
    expect(screen.getAllByRole('button')[0]).toHaveStyle({ borderColor: '#123123' });
  });

  it('supports styles api (classNames)', () => {
    render(
      <MonthsList
        {...defaultProps}
        classNames={{ monthsList: 'test-months-list', pickerControl: 'test-control' }}
      />
    );
    expect(screen.getByRole('table')).toHaveClass('test-months-list');
    expect(screen.getAllByRole('button')[0]).toHaveClass('test-control');
  });
});
