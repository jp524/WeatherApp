import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType';

const CurrentWeather = ({route}) => {
  const {
    wrapper,
    container,
    tempStyles,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {weatherData} = route.params;
  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        <Icon
          name={weatherType[weatherCondition].icon}
          size={100}
          color={'white'}
        />
        <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
        <Text style={tempStyles}>{`Feels like ${Math.round(
          feels_like,
        )}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}° `}
          messageTwo={`Low: ${Math.floor(temp_min)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    color: 'white',
    fontSize: 48,
  },
  message: {
    color: 'white',
    fontSize: 30,
  },
});

export default CurrentWeather;
