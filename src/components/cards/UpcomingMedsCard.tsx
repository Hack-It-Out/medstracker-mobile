import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'

const UpcomingMedsCard = () => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow px-2 rounded-lg`}>
        <View style={tw`rounded-full`}>
        <View style={tw`h-[172px] w-[142px]`}>
            <Text style={tw`text-black`}>Hey Bro</Text>
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default UpcomingMedsCard