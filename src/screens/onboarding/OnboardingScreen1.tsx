import {View, Text, Button, Linking, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import tw from '../../lib/tailwind';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type Props = NativeStackScreenProps<>;
type Props = {
  route: any;
  navigation: any;
};

const OnboardingScreen1 = ({route, navigation}: Props) => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={tw`items-center justify-center h-full mx-3`}>
      <Image
        source={{
          uri: 'https://rebrand.ly/ysanlrn',
        }}
        style={tw`h-56 w-56 bg-transparent border-transparent`}
      />
      <Text style={tw`text-3xl font-bold text-black pb-4`}>
        Never Miss Your Medication
      </Text>
      <Text
        style={tw`w-48 text-center pb-5 text-sm`}>
        If you always forget to take your meds on time, we are here to help you
        remember.
      </Text>
      <Button
        title="Next"
        color={'#F13A3B'}
        onPress={() => navigation.navigate('OnboardingScreen2')}
      />
    </View>
  );
};

export default OnboardingScreen1;
