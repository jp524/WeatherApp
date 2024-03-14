import {useState, useEffect, useCallback} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';

export const useGetWeather = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = useCallback(async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setErrorMessage('could not fetch weather');
    }
  }, [lat, lon]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
    );
    fetchWeatherData();
  }, [lat, lon, fetchWeatherData]);

  return [errorMessage, weather];
};
