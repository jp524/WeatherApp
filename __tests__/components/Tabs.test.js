import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../../src/components/Tabs';
import {it} from '@jest/globals';
import {weatherData} from '../../__utilities__/weatherData';

describe('Tabs', () => {
  it('changes tabs', () => {
    render(
      <NavigationContainer>
        <Tabs weather={weatherData} />
      </NavigationContainer>,
    );
    expect(screen.getByRole('header', {name: 'Current'})).toBeOnTheScreen();

    // Note: React Navigation uses `button` role for tab buttons as workaround.
    // It should actually be `tab` role.
    const cityTab = screen.getByRole('button', {name: 'City'});
    fireEvent.press(cityTab);

    expect(screen.getByRole('header', {name: 'City'})).toBeOnTheScreen();
    expect(
      screen.queryByRole('header', {name: 'Current'}),
    ).not.toBeOnTheScreen();
  });
});
