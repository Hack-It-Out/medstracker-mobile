import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import FormInput from '../../../components/Input/TextInput';

import Pills from '../../../assets/images/pill.png';

const AddMedScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="px-3 py-4 flex-1 bg-white">
      <View className="flex-row items-center justify-between w-full mx-auto">
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full">
          <ChevronLeftIcon size={24} fill="" />
        </TouchableHighlight>
        <View className="mx-auto">
          <Text className="text-black text-[22px] mx-auto font-bold">
            Add Medication
          </Text>
          <Text className="text-gray-500 text-sm text-center">
            and set a reminder
          </Text>
        </View>
      </View>

      <FormInput label="Medication Name" placeholder="Enter medication name" />

      {/* Medication Type */}
      <Text className="font-semibold text-black text-[16px]">
        Medication Type
      </Text>
      <View className="flex-row justify-between px-2 py-5">
        <TouchableOpacity className="bg-gray-400 rounded-md w-[60px] h-[61px] items-center justify-center bg-white border border-gray-100">
          <Image
            source={Pills}
            alt="Pills"
            className="w-[44px] h-[39px] rounded-"
          />
          <Text className="text-black text-xs">Pills</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-400 rounded-md w-[60px] h-[61px] items-center justify-center bg-white border border-gray-100">
          <Image
            source={Pills}
            alt="Pills"
            className="w-[44px] h-[39px] rounded-"
          />
          <Text className="text-black text-xs">Pills</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-400 rounded-md w-[60px] h-[61px] items-center justify-center bg-white border border-gray-100">
          <Image
            source={Pills}
            alt="Pills"
            className="w-[44px] h-[39px] rounded-"
          />
          <Text className="text-black text-xs">Pills</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-400 rounded-md w-[60px] h-[61px] items-center justify-center bg-white border border-gray-100">
          <Image
            source={Pills}
            alt="Pills"
            className="w-[44px] h-[39px] rounded-"
          />
          <Text className="text-black text-xs">Pills</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-5 mb-10">
        {/* Amount */}
        <View>
          <Text className="font-semibold text-black text-[16px]">Amount</Text>
          <Text className="text-gray-500 text-xs">
            How many pills do you need to take at a time?
          </Text>
          {/* Number Selector */}
        </View>

        {/* Duration */}
        <View>
          <Text className="font-semibold text-black text-[16px]">Duration</Text>
          <Text className="text-gray-500 text-xs">
            How many days do you need to take the medication?
          </Text>
          {/* Dropdown picker */}
        </View>

        {/* Time */}
        <View>
          <Text className="font-semibold text-black text-[16px]">Time</Text>
          <Text className="text-gray-500 text-xs">
            Add the time you need to take the medication.
          </Text>
          {/* Number Selector */}
        </View>
      </View>

      <Button title="Add Medication" color="#F13A3B" />
    </View>
  );
};

export default AddMedScreen;
