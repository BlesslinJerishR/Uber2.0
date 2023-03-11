import { View, Text, SafeAreaView, StyleSheet, Image
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Login from '../components/Login';
import Footer from '../components/Footer';
import DriveAndDrop from '../components/DriveAndDrop';
const uberLogo = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png";
const carMan = "https://media.istockphoto.com/id/1154373349/photo/good-looking-man-entering-ride-sharing-car.jpg?s=612x612&w=0&k=20&c=buhwQsbXFEtbonACUafN2zm6W3rWzYdXVDOtxef3B54="

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 ml-8`}>
      <Image


style={[tw`absolute`,{
    width: 700,
    height: 600,
    left: 0,
    top : -20,
    resizeMode: "contain",
}]}

source={{
    uri: carMan,
}}
/>      
        <Image

        style={{
            width: 100,
            height: 100,
            left: 850,
            resizeMode: "contain",
        }}

        source={{
            uri: uberLogo,
        }}
        />

        <NavOptions/>
        <Login/>
        <DriveAndDrop/>
        <Footer/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})