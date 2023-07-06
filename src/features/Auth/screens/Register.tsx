/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {AuthLayout} from '../components';
import FormInput from '../../../components/Input/TextInput';
import {Button} from 'react-native-paper';
import axios from 'axios';
import {BASE_URL} from '../../../config';
import {useNavigation} from '@react-navigation/native';

export function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone_no: phoneNumber,
      password: password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, data);
      console.log(response.data);
      // Handle success and navigate to the desired screen
      navigation.navigate('Login');
      Alert.alert('User created successfully!');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Join us in valuing your health">
      <FormInput
        placeholder="John"
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <FormInput
        placeholder="Doe"
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <FormInput
        placeholder="+2547XXXXX"
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <FormInput
        placeholder=""
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        buttonColor="#F13A3B"
        textColor="white"
        style={{borderRadius: 8}}
        onPress={handleSignUp}>
        Sign Up
      </Button>
    </AuthLayout>
  );
}
