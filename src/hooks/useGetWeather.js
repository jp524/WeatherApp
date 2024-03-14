import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';

export const useGetWeather = () => {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError('could not fetch weather');
    }
  };

  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        error => {
          console.log(error);
        },
      );
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [error, weather];
};
