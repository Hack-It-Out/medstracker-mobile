/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  AddMedsScreen,
  CalendarScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';

import {HomeIcon, CalendarDaysIcon, UserIcon} from 'react-native-heroicons/mini';

import AddMeds from '../assets/Meds.svg';

const Tabs = createBottomTabNavigator();

const BottomStack = () => {
  let active_color = '#F13A3B';
  let inactive_color = '#BDBDBD';

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
            // color = '';

            if (focused) {
              iconName = (
                <HomeIcon width={size} height={size} fill={active_color} />
              );
            } else {
              iconName = (
                <HomeIcon width={size} height={size} fill={inactive_color} />
              );
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
          tabBarIcon: ({focused, size}) => {
            let iconName;
            size = 30;

            if (focused) {
              iconName = <AddMeds width={size} height={size} fill={active_color} />;
            } else {
              iconName = <AddMeds width={size} height={size} fill={inactive_color} />;
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
              iconName = <CalendarDaysIcon width={size} height={size} fill={active_color} />;
            } else {
              iconName = <CalendarDaysIcon width={size} height={size} fill={inactive_color} />;
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
          tabBarIcon: ({focused, size}) => {
            let iconName;
            size = 30;

            if (focused) {
              iconName = <UserIcon width={size} height={size} fill={active_color} />;
            } else {
              iconName = <UserIcon width={size} height={size} fill={inactive_color} />;
            }
            return iconName;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomStack;
