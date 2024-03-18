import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {weatherType} from '../utilities/weatherType';
import {convertUnixToLocalTime} from '../utilities/convertUnixToLocalTime';

const ListItem = props => {
  const {dt, timezone, min, max, condition} = props;
  const {item, temp, date, dateTextWrapper} = styles;
  return (
    <View style={item}>
      <Icon name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{convertUnixToLocalTime(dt, timezone, 'dddd')}</Text>
        <Text style={date}>{convertUnixToLocalTime(dt, timezone, 'h a')}</Text>
      </View>
      <Text style={temp}>{`${Math.floor(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'midnightblue',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
    width: '20%',
  },
});
export default ListItem;
