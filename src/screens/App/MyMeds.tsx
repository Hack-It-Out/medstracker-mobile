/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {PlusIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const MyMedsScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="px-4 py-5 flex-1 bg-white">
      <Text className="text-black text-center text-xl text-primary border-b-[0.5px] border-gray-300 py-2 font-bold">
        Your Medication
      </Text>

      {/* Current Medications */}

      <TouchableOpacity
        className="bg-primary w-12 h-12 items-center justify-center p-2 rounded-full absolute bottom-5 right-6"
        onPress={() => navigation.navigate('Add Meds')}>
        <PlusIcon size={30} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MyMedsScreen;
