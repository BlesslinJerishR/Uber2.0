import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const Login = () => {
  return (
    <View>
      <Text style={[tw`bg-black text-white w-20 h-7 p-1 text-center rounded relative mt-4`, {left : 800}]}>Login</Text>
      <Text style={[tw`bg-black text-white w-20 h-7 p-1 text-center rounded relative mt-4`, {left : 970, top: -45}]}>Sign Up</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})