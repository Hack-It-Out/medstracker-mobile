/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';

import Profile from '../assets/profile.png';

const AppBar = () => {
  const username = 'John Doe';

  return (
    <View className="p-5">
      <View className="flex-row justify-between items-center">
        <View className="w-[195px]">
          <Text className="text-black font-bold text-[22px]">
            Reminders for your Medication
          </Text>
          <Text className="text-gray-500 text-[12px]">
            Welcome back, {username}
          </Text>
        </View>
        <View>
          <Image
            source={Profile}
            alt="Profile"
            className="w-[55px] h-[55px] rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default AppBar;
