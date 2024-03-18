import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorItem from '../src/components/ErrorItem';
import {it} from '@jest/globals';

describe('ErrorItem', () => {
  it('displays text', () => {
    render(<ErrorItem />);
    expect(screen.getByText('Sorry, something went wrong')).toBeVisible();
  });
});
