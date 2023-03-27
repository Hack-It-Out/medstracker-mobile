/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
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
import {Text, TouchableOpacity, View} from 'react-native';

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const Tabs = createBottomTabNavigator();

function TabBar({state, descriptors, navigation}: TabBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{
                color: isFocused ? 'red' : '#000',
            }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomStack = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({focused}) => (
                <Home
                    width={24}
                    height={24}
                    fill={focused ? '#000' : '#000'}
                    />
            ),
        }}
      />
      <Tabs.Screen name="AddMeds" component={AddMedsScreen} />
      <Tabs.Screen name="Calendar" component={CalendarScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default BottomStack;
