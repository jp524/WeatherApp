import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import Tabs from './src/components/Tabs';
import {WEATHER_API_KEY} from '@env';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

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
  }, [lat, lon]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setErrorMessage('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const loadingView = (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );

  const notLoadingView = (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );

  return loading ? loadingView : notLoadingView;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
