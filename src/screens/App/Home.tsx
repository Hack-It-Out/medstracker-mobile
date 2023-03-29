/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import {AppBar, Date, UpcomingReminders} from '../../components';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white px-5">
      {/* AppBar */}
      <AppBar />

      {/* Date */}
      <Date />

      {/* Upcoming Medications/Reminders */}
      <UpcomingReminders />

      {/* All Reminders */}
    </View>
  );
};

export default HomeScreen;
