/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
      <ScrollView
        horizontal
        className="space-x-3 py-5"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={30}
        pagingEnabled
        scrollToOverflowEnabled
        >
        {/* Meds Card */}
        {meds?.map(med => (
          <TouchableOpacity
            style={{
              height: 172,
              width: 140,
              // borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 10,
              marginVertical: 10,
              justifyContent: 'space-between',
              elevation: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 1,
                height: 3,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              backgroundColor: '#fff',
            }}
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
