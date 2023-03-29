import {TextInput, View, Text} from 'react-native';
import React from 'react';

type FormInputProps = {
  placeholder: string;
  label: string;
};

const FormInput = ({placeholder, label}: FormInputProps) => {
  return (
    <View className="space-y-2 my-5">
      <Text className="font-semibold text-black text-[16px]">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className="border-gray-400 border h-12 rounded-md placeholder:text-gray-700"
      />
    </View>
  );
};

export default FormInput;
