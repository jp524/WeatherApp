import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it} from '@jest/globals';
import UpcomingWeather from '../../src/screens/UpcomingWeather';
import {weatherData} from '../../__utilities__/weatherData';

describe('CurrentWeather', () => {
  beforeEach(() => {
    const route = {
      params: {weatherData: weatherData.list},
    };
    render(<UpcomingWeather route={route} />);
  });

  it('displays a day of the week', () => {
    const dayMatches = screen.getAllByText('Monday');
    expect(dayMatches[0]).toBeVisible();
  });

  it('displays a time', () => {
    expect(screen.getByText('9 pm')).toBeVisible();
  });

  it('displays the low and high temperatures', () => {
    expect(screen.getByText('16°/22°')).toBeVisible();
  });
});
