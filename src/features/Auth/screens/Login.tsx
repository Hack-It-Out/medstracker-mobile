/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AuthLayout} from '../components';
import FormInput from '../../../components/Input/TextInput';
import {Button, Checkbox} from 'react-native-paper';
import {BASE_URL} from '../../../config';
import {HeartIcon} from 'react-native-heroicons/solid';
import axios from 'axios';

export function Login() {
  // const [rememberMe, setRememberMe] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const data = {phone_no: phoneNo, password};

    axios
      .post(`${BASE_URL}/auth/login`, data)
      .then((response: {data: any}) => {
        // Handle the response data
        console.log(response.data);
      })
      .catch((error: any) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Hello again, you’ve been missed!">
      {/* Form Inputs */}
      <FormInput
        placeholder="Enter your phone number"
        label="Phone Number"
        value={phoneNo}
        onChangeText={setPhoneNo}
      />
      <FormInput
        placeholder=""
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className={[
            'w-4 h-4 border-2 border-primary rounded',
            rememberMe ? 'bg-primary' : '',
          ]}>
          {rememberMe && <HeartIcon size={16} color="white" />}
        </TouchableOpacity>
        <Text style={{marginLeft: 10}} className="text-black">
          Remember Me
        </Text>
      </View> */}

      <Button
        buttonColor="#F13A3B"
        textColor="white"
        style={{borderRadius: 8}}
        onPress={handleSignIn}>
        Sign In
      </Button>
    </AuthLayout>
  );
}
