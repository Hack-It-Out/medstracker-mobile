/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  AddMedsScreen,
  CalendarScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';

import Home from '../assets/Home.svg';
import AddMeds from '../assets/Meds.svg';
import Calendar from '../assets/Calendar.svg';
import Profile from '../assets/User.svg';

const Tabs = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          elevation: 0,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 8,
          marginTop: 0,
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 30;
            color = 'blue';

            if (focused) {
              iconName = <Home width={size} height={size} fill={color} />;
            } else {
              iconName = <Home width={size} height={size} fill={color} />;
            }
            return iconName;
          },
        }}
      />
      <Tabs.Screen
        name="AddMeds"
        component={AddMedsScreen}
        options={{
          tabBarLabel: 'Add Meds',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 30;
            color = 'blue';

            if (focused) {
              iconName = <AddMeds width={size} height={size} fill={color} />;
            } else {
              iconName = <AddMeds width={size} height={size} fill={color} />;
            }
            return iconName;
          },
        }}
      />
      <Tabs.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 30;
            color = 'grey';

            if (focused) {
              iconName = <Calendar width={size} height={size} fill={color} />;
            } else {
              iconName = <Calendar width={size} height={size} fill={color} />;
            }
            return iconName;
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 30;
            color = 'blue';

            if (focused) {
              iconName = <Profile width={size} height={size} fill={color} />;
            } else {
              iconName = <Profile width={size} height={size} fill={color} />;
            }
            return iconName;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomStack;
