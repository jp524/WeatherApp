import React, {useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';

const App = () => {
  const [loading, setLoading] = useState(true);

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
