import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import tw from '../lib/tailwind';

import {AllReminders, UpcomingMeds} from '../components';
import { DaysCard } from '../components/cards';

const Homepage = () => {
  const navigation = useNavigation();


  const [date, setDate] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Setting the date in the app
  useEffect(() => {
    let today = new Date();

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[today.getDay()];

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let month = months[today.getMonth()];

    let date =
      day +
      ', ' +
      today.getDate() +
      ' ' +
      month +
      ' ' +
      today.getFullYear() +
      '';
    setDate(date!);
  }, []);

  return (
    <SafeAreaView style={tw`bg-[#DADADA] h-full w-full py-5 px-2`}>
      <View style={tw`flex-row justify-between items-center px-2 mb-5`}>
        <View>
          <Text style={tw`text-black/90 text-2xl font-semibold w-48`}>
            Reminder for you to take your Medication
          </Text>
          <Text style={tw`text-black/50`}>Welcome back Amos</Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://rebrand.ly/7lugwo6',
            }}
            style={tw`h-16 w-16 bg-transparent border-transparent border-2 rounded-full`}
          />
        </View>
      </View>
      <DaysCard />
      <View style={tw`items-center mt-2`}>
        <Text style={tw`text-black/50`}>{date}</Text>
      </View>
      <ScrollView>
        {/* Upcoming medication */}
        <UpcomingMeds />
        {/* All Reminders */}
        <AllReminders />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
