import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from "../lib/tailwind"
import {useNavigation} from '@react-navigation/native';


const Homepage = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView>
      <Text style={tw`text-black`}>Welcome to Meds Tracker</Text>
    </SafeAreaView>
  )
}

export default Homepage