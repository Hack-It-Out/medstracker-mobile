import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';

import Profile from '../../assets/profile.png';
import {ChevronRightIcon} from 'react-native-heroicons/solid';

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-primary/90 font-bold text-center text-2xl">
        Profile
      </Text>

      {/* Profile pic */}
      <View className="items-center border-b-[.5px] border-gray-300">
        <Image
          source={Profile}
          alt="Profile"
          className="w-[100px] h-[100px] rounded-full mx-auto mt-5"
        />

        <Text className="text-black text-center text-2xl font-bold mt-5">
          John Doe
        </Text>

        <Text className="text-gray-500 text-center text-sm mb-4">
          Free account
        </Text>
      </View>

      {/* Medication details */}
      <View className="mt-5 flex-row border-b-[.5px] border-gray-300">
        <View className="flex-1 mb-4">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Medications Completed
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Reminders Set
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Available Medications
          </Text>
        </View>
      </View>

      {/* Account details */}
      <View className="flex-row border-b-[.5px] items-center justify-between border-gray-300">
        <View className="items-center flex-row justify-between my-3">
          <Text className="text-black text-md font-semibold">
            Personal Information
          </Text>
          <TouchableHighlight className="p-2">
            <ChevronRightIcon size={20} fill="black" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
