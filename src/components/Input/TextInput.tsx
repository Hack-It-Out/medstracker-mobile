import {TextInput, View, Text} from 'react-native';
import React from 'react';

type FormInputProps = {
  placeholder: string;
  label: string;
  secureTextEntry?: boolean; // Added prop for secure text entry
  value?: string;
  onChangeText?: (text: string) => void;
};

const FormInput = ({
  placeholder,
  label,
  secureTextEntry = false,
  value,
  onChangeText
}: FormInputProps) => {
  return (
    <View className="space-y-2 my-5">
      <Text className="font-semibold text-black text-[16px]">{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // Pass the secureTextEntry prop to enable secure entry for passwords
        className="border-gray-400 border h-12 rounded-md placeholder:text-gray-700 px-4"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;
