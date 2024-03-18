import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it} from '@jest/globals';
import CurrentWeather from '../../src/screens/CurrentWeather';
import {weatherData} from '../../__utilities__/weatherData';

describe('CurrentWeather', () => {
  beforeEach(() => {
    const route = {
      params: {weatherData: weatherData.list[0]},
    };
    render(<CurrentWeather route={route} />);
  });

  it('displays the current temperature', () => {
    expect(screen.getByText('Feels like 13°')).toBeVisible();
  });

  it('displays the low and high temperatures', () => {
    expect(screen.getByText('High: 18°')).toBeVisible();
    expect(screen.getByText('Low: 14°')).toBeVisible();
  });

  it('displays the current conditions', () => {
    expect(screen.getByText('clear sky')).toBeVisible();
  });

  it('displays a message based on the current conditions', () => {
    expect(screen.getByText('It is perfect t-shirt weather')).toBeVisible();
  });
});
