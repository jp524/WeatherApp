import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}>
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
