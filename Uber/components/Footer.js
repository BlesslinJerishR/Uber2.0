import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const eat = "https://img.icons8.com/ios-filled/100/null/dining-room.png"
const freight =  "https://img.icons8.com/ios-filled/100/null/handle-with-care.png"
const suitcase = "https://img.icons8.com/pastel-glyph/64/null/luggage--v1.png"
const train = "https://img.icons8.com/ios-filled/100/null/high-speed-train.png"
const bike = "https://img.icons8.com/ios-filled/100/null/cycling-track.png" 
const plane = "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-aeroplane-transportation-tanah-basah-glyph-tanah-basah-2.png" 
const Footer = () => {
  return (
    <View style={[tw`mt-20 ml-44`,
        {
            display: "inline",  
        }
    ]}>

    <Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 23,
        }}

        source={{
            uri: eat,
        }}
    />

    <Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 140,
            top: 0,
            position: "absolute",
        }}

        source={{
            uri: freight,
        }}
    />
    <Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 290,
            top: 0,
            position: "absolute",
        }}

        source={{
            uri: suitcase,
        }}
    />
    <Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 440,
            top: 0,
            position: "absolute",
        }}

        source={{
            uri: train,
        }}
    /><Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 565,
            top: 0,
            position: "absolute",
        }}

        source={{
            uri: bike,
        }}
    />
    <Image 
        style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            marginBottom: 20,
            left: 670,
            top: 0,
            position: "absolute",
        }}

        source={{
            uri: plane,
        }}
    />


      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Eat</Text>
      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Freight</Text>
      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Business</Text>
      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Transit</Text>
      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Bike</Text>
      <Text style={[tw`p-8`,
        {
            fontSize: "24px",
      }
    ]}>Fly</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})