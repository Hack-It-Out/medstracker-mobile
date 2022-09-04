import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {UpcomingMedsCard} from './cards';

const UpcomingMeds = () => {
  return (
    <View style={tw`mt-10`}>
      <Text style={tw`text-black/50 font-semibold `}>Upcoming Meds</Text>
      <ScrollView horizontal style={tw`mt-5`}>
        <UpcomingMedsCard />
        <UpcomingMedsCard />
        <UpcomingMedsCard />
        <UpcomingMedsCard />
        <UpcomingMedsCard />
      </ScrollView>
    </View>
  );
};

export default UpcomingMeds;
