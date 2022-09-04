import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const UpcomingMedsCard = () => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow p-1 rounded-lg`}>
      <View style={tw``}>
        <View style={tw`h-[172px] w-[142px] ml-1 justify-around`}>
          <View>
          <Text style={tw`text-black pt-2 font-bold text-xl`}>Amoxilin</Text>
          <Text style={tw`text-black/60`}>09:00 AM</Text>
          </View>
          <View style={tw`items-end`}>
            <View style={tw`relative`}>
            <Image
              source={{
                uri: 'https://rebrand.y/7lugwo6',
              }}
              style={tw`h-16 w-16 bg-transparent border-transparent -inset-2 border-2 rounded-full`}
            />
            </View>
          </View>
          <View>
            <Text style={tw`text-[#F13F3B]`}>Take 2 pills</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingMedsCard;
