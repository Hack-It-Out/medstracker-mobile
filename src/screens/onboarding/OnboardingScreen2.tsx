import {View, Text, Button, Linking, Image, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import tw from '../../lib/tailwind';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import classNames from 'classnames';
import {} from 'react-native-safe-area-context';

// type Props = NativeStackScreenProps<>;
type Props = {
  route: any;
  navigation: any;
};

const OnboardingScreen2 = ({route, navigation}: Props) => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw``}>
      <View style={tw`items-center justify-start h-full mx-3  w-full`}>
        <View>
          <Image
            source={{
              uri: 'https://rebrand.ly/4444772',
            }}
            style={tw`relative h-96 w-96 mb-24 bg-transparent border-transparent`}
          />
          <Image
            source={{
              uri: 'https://rebrand.ly/daff5b',
            }}
            style={tw`absolute h-[216px] inset-24 border-transparent w-[173px] mb-24 bg-transparent border-transparent`}
          />
        </View>

        <Text style={tw`text-3xl font-bold text-black text-center mr-5 pb-4`}>
          Note Medication Progress
        </Text>
        <Text style={tw`w-48 text-center pb-5 text-sm mr-5`}>
          Always record your medication progress for your future reference.
        </Text>

        <View style={tw`w-84 p-5 mr-6`}>
          <Button
            title="Next"
            color={'#F13A3B'}
            onPress={() => navigation.navigate('OnboardingScreen2')}
          />
          <Text style={tw`mt-3 text-center text-lg text-[#F13A3B]`}>Skip</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen2;
