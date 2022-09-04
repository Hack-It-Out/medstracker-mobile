import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import tw from '../lib/tailwind';
import {useNavigation} from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={tw`bg-[#DADADA] h-full w-full p-2 space-x-4`}>
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
      <View style={tw`px-2`}>
        <View style={tw`h-20 bg-[#F13A3B] rounded-lg`}>

        </View>
      </View>
      <View style={tw`items-center mt-2`}>
        <Text style={tw`text-black/50`}>Wednesday, 07 September 2022</Text>
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  );
};

export default Homepage;
