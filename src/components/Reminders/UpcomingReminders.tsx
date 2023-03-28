/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';

import Pills from '../../assets/images/pill.png';

const UpcomingReminders = () => {
  const meds = [
    {
      id: 1,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
    {
      id: 2,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
    {
      id: 3,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
    {
      id: 4,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
    {
      id: 5,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
    {
      id: 6,
      name: 'Amoxilin',
      reminder_time: '9:00 AM',
      meds_type: 'pills',
      amt: '2',
      _self: () => {},
    },
  ];

  return (
    <View>
      <Text className="text-gray-600 text-[18px]">Upcoming</Text>

      {/* ScrollView */}
      <ScrollView horizontal className="space-x-3 py-5">
        {/* Meds Card */}
        {meds?.map(med => (
          <TouchableOpacity
            className="h-[172px] w-[140px] border rounded-md px-2 py-3 justify-between"
            key={med.id}
            onPress={med._self}>
            <View>
              {/* Medication Name */}
              <Text className="text-black font-bold">{med.name}</Text>

              {/* Reminder time */}
              <Text className="text-gray-400">{med.reminder_time}</Text>
            </View>

            {/* Medtype image */}
            <View className="items-start">
              <View className="bg-gray-100 rounded-full w-[60px] h-[60px] items-center justify-center">
                <Image
                  source={Pills}
                  alt="Pills"
                  className="w-[60px] h-[60px] rounded-full"
                />
              </View>
            </View>

            {/* Meds Specification */}
            <Text className="text-primary">
              Take {med.amt} {med.meds_type}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingReminders;
