import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, StatusBar} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({route}) => {
  const {weatherData} = route.params;

  const renderItem = ({item}) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
});

export default UpcomingWeather;
