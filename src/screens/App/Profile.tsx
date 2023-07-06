import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Profile from '../../assets/profile.png';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setSignIn} from '../../features';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const [name, setName] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const {first_name, last_name} = JSON.parse(userData);
          const fullName = `${first_name} ${last_name}`;
          setName(fullName);
        }
      } catch (error) {
        console.log('Error retrieving user data from AsyncStorage:', error);
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    // Clear AsyncStorage
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
    }

    // Dispatch the setSignOut action to update the Redux store
    dispatch(
      setSignIn({
        isLoggedIn: false,
      }),
    );
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-primary/90 font-bold text-center text-2xl">
        Profile
      </Text>

      {/* Profile pic */}
      <View className="items-center border-b-[.5px] border-gray-300">
        <Image
          source={Profile}
          alt="Profile"
          className="w-[100px] h-[100px] rounded-full mx-auto mt-5"
        />

        <Text className="text-black text-center text-2xl font-bold mt-5">
            {name}
        </Text>

        <Text className="text-gray-500 text-center text-sm mb-4">
          Free account
        </Text>
      </View>

      {/* Medication details */}
      <View className="mt-5 flex-row border-b-[.5px] border-gray-300">
        <View className="flex-1 mb-4">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Medications Completed
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Reminders Set
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-black text-center text-xl font-bold">0</Text>
          <Text className="text-gray-500 text-center text-sm">
            Available Medications
          </Text>
        </View>
      </View>

      {/* Account details */}
      <View className="flex-row border-b-[.5px] items-center justify-between border-gray-300 w-full">
        <View className="items-center flex-row justify-between my-3">
          <Text className="text-black text-md font-semibold">
            Personal Information
          </Text>
          <TouchableHighlight className="p-2">
            <ChevronRightIcon size={20} fill="black" />
          </TouchableHighlight>
        </View>
      </View>

      <View>
        <Button
          buttonColor="#FFA23B"
          className="w-full rounded-lg"
          textColor="white"
          onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
