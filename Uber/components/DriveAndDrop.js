import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const gps ="https://img.icons8.com/ios-filled/100/null/navigation.png"
const rightArrow = "https://img.icons8.com/ios-glyphs/90/null/circled-right.png"
const line = "https://img.icons8.com/wired/64/null/vertical-line.png"

const DriveAndDrop = () => {
  return (
    <View  style={[
        tw`bg-white absolute`,
        {
            width: 300,
            marginTop: 260,
            marginLeft: 20,
            padding: 20,
            borderRadius: 7,
            
        }
        ]}>
      <Text style={{
        fontSize: 24,
      }}>Request a drive now</Text>
      <TextInput
        style ={[tw`mb-5 mt-5`,{
            height: 40,
            width: 230,
            borderColor: 'black',
            borderWidth: 1,
        }]}
        defaultValue = "  Enter pickup location"
      />
      <Image
        style={[tw`absolute`,{
            width: 40,
            height: 40,
            resizeMode: "contain",
            marginBottom: 20,
            left: 210,
            top: 68,
        }]}

        source={{
            uri: gps,
        }}     
      />
    <Image
        style={[tw`absolute`,{
            width: 45,
            height: 45,
            resizeMode: "contain",
            marginBottom: 20,
            left: 208,
            top: 125,
        }]}

        source={{
            uri: rightArrow,
        }}     
      />
      <Image
        style={[tw`absolute`,{
            width: 40,
            height: 40,
            resizeMode: "contain",
            marginBottom: 20,
            left: 10,
            top: 95,
        }]}

        source={{
            uri: line,
        }}     
      />
      <TextInput
        style ={{
            height: 40,
            width: 230,
            borderColor: 'black',
            borderWidth: 1,
        }}
        defaultValue = "  Enter destination"
      />
    </View>
  )
}

export default DriveAndDrop

const styles = StyleSheet.create({})