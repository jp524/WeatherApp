import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import ErrorItem from './src/components/ErrorItem';
import {useGetWeather} from './src/hooks/useGetWeather';

const App = () => {
  const [errorMessage, weather] = useGetWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errorMessage ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
