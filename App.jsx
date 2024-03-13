import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import Tabs from './src/components/Tabs';
import {WEATHER_API_KEY} from '@env';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  console.log(WEATHER_API_KEY);

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
