import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'black',
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
              color={focused ? '#007bff' : 'grey'}
            />
          ),
        }}
        initialParams={{weatherData: weather.list[0]}}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'clock'}
              size={25}
              color={focused ? '#007bff' : 'grey'}
            />
          ),
        }}
        initialParams={{weatherData: weather.list}}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={25}
              color={focused ? '#007bff' : 'grey'}
            />
          ),
        }}
        initialParams={{city: weather.city}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
