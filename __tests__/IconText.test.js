import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import IconText from '../src/components/IconText';
import {it} from '@jest/globals';

it('displays text', () => {
  render(
    <IconText
      iconName={'sun'}
      iconColor={'red'}
      bodyText={"It's sunny"}
      bodyTextStyles={''}
    />,
  );
  expect(screen.getByText("It's sunny")).toBeVisible();
});
