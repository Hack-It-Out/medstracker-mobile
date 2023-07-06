/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  //   navigate: () => void;
};

export function AuthLayout({children, title, subtitle}: AuthLayoutProps) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (title === 'Welcome Back!') {
      navigation.navigate('Register'); // Navigate to Register screen
    } else {
      navigation.navigate('Login'); // Navigate to Sign In screen
    }
  };

  return (
    <View className="flex-1 justify-between bg-white px-5 py-4 items-center">
      <View className="w-full">
        <Text className="text-black font-bold text-2xl">{title}</Text>
        <Text className="text-gray-400 text-xs">{subtitle}</Text>

        <View>{children}</View>
      </View>
      <View>
        {title === 'Welcome Back!' ? (
          <TouchableOpacity onPress={handleNavigate}>
            <Text className="text-black">
              Don't have an account?{' '}
              <Text
                className="text-primary underline-2 underline"
                style={{textDecorationLine: 'underline'}}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleNavigate}>
            <Text className="text-black">
              Have an account?{' '}
              <Text
                className="text-primary underline-2 underline"
                style={{textDecorationLine: 'underline'}}>
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
