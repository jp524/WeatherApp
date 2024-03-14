import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import RowText from '../src/components/RowText';
import {it} from '@jest/globals';

it('displays the two pieces of text', () => {
  render(
    <RowText
      messageOne={'Hello'}
      messageTwo={'World'}
      containerStyles={''}
      messageOneStyles={''}
      messageTwoStyles={''}
    />,
  );
  expect(screen.getByText('Hello')).toBeVisible();
  expect(screen.getByText('World')).toBeVisible();
});
