import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, View} from 'react-native';
import moment from 'moment';
import IconText from '../components/IconText';

const City = ({route}) => {
  const [daytime, setDaytime] = useState(true);
  const {city} = route.params;
  const {name, country, population, sunrise, sunset, timezone} = city;

  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    rowLayout,
    riseSetWrapper,
    riseSetText,
  } = styles;

  const backgroundStyle = {
    backgroundColor: daytime ? 'lightskyblue' : 'midnightblue',
  };

  useEffect(() => {
    let currentTime = Date.now();
    setDaytime(currentTime > sunrise && currentTime < sunset);
  }, [sunrise, sunset, daytime]);

  return (
    <SafeAreaView style={[container, backgroundStyle]}>
      <View>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'white'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
      </View>
      <View>
        <Text />
      </View>
      <View style={[riseSetWrapper, rowLayout]}>
        <IconText
          iconName={'sunrise'}
          iconColor={'white'}
          bodyText={moment
            .unix(sunrise)
            .utcOffset(timezone / 3600)
            .format('h:mm a')}
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconName={'sunset'}
          iconColor={'white'}
          bodyText={moment
            .unix(sunset)
            .utcOffset(timezone / 3600)
            .format('h:mm a')}
          bodyTextStyles={riseSetText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: StatusBar.currentHeight || 0,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
