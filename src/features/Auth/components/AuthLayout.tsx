import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthLayout({children, title, subtitle}: AuthLayoutProps) {
  return (
    <View className="flex-1 bg-white px-5 py-4">
      <Text className="text-black font-bold text-2xl">{title}</Text>
      <Text className="text-gray-400 text-xs">{subtitle}</Text>

      <View>{children}</View>
    </View>
  );
}
