import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType';

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Icon name={'sun'} size={100} color={'black'} />
        <Text style={temp}>6</Text>
        <Text style={temp}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It's sunny"}
        messageTwo={weatherType.Thunderstorm.message}
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
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
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
    color: 'black',
    fontSize: 48,
  },
  message: {
    color: 'black',
    fontSize: 30,
  },
});

export default CurrentWeather;
