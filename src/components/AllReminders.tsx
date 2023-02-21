import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'

const AllReminders = () => {
  return (
    <ScrollView style={tw`mt-10`}>
      <Text style={tw`text-black/50 font-semibold text-lg`}>All Reminders</Text>
    </ScrollView>
  )
}

export default AllReminders