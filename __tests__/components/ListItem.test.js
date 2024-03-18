import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ListItem from '../../src/components/ListItem';
import {it} from '@jest/globals';

describe('ListItem', () => {
  beforeEach(() => {
    render(
      <ListItem
        dt={1710784800}
        timezone={-25000}
        min={'5.3'}
        max={'8.3'}
        condition={'Rain'}
      />,
    );
  });

  it('displays the day of the week', () => {
    expect(screen.getByText('Monday')).toBeVisible();
  });

  it('displays the hour', () => {
    expect(screen.getByText('11 am')).toBeVisible();
  });

  it('displays the min and max temperatures correctly rounded', () => {
    expect(screen.getByText('5°/8°')).toBeVisible();
  });
});
