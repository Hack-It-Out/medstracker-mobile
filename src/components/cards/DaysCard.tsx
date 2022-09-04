import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from '../../lib/tailwind';

const DaysCard = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];   
  const dayNum = []

  const [date, setDate] = useState('')
  
  useEffect(() => {
    let d = new Date()
    let today = d.getDay()
    setDate(today.toString())
  }, [])

  return (
    <View style={tw`px-2`}>
      <View
        style={tw`h-20 bg-[#F13A3B] rounded-lg flex-row justify-around items-center`}>
        {days.map((day, id) => (
          <View style={tw`items-center`}>
            <Text style={tw`text-white pb-2`} key={id}>
              {day}
            </Text>
            <Text>{date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DaysCard;
