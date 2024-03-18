import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it} from '@jest/globals';
import City from '../../src/screens/City';
import moment from 'moment';
import {weatherData} from '../../__utilities__/weatherData';

describe('City', () => {
  beforeEach(() => {
    const route = {
      params: {city: weatherData.city},
    };
    render(<City route={route} />);
  });

  it('displays the city name and country', () => {
    expect(screen.getByText('Mountain View')).toBeVisible();
    expect(screen.getByText('US')).toBeVisible();
  });

  it('displays the city population', () => {
    expect(screen.getByText('Population: 74066')).toBeVisible();
  });

  it('displays the sunrise and sunset times', () => {
    const timezone = -25200;
    const sunriseUnix = 1710771240;
    const sunriseUTC = moment
      .unix(sunriseUnix)
      .utcOffset(timezone / 3600)
      .format('h:mm a');
    const sunsetUnix = 1710814705;
    const sunsetUTC = moment
      .unix(sunsetUnix)
      .utcOffset(timezone / 3600)
      .format('h:mm a');
    expect(screen.getByText(sunriseUTC)).toBeVisible();
    expect(screen.getByText(sunsetUTC)).toBeVisible();
  });
});
