import { View, Text, SafeAreaView, StyleSheet, Image
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const uberLogo = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image

        style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
        }}

        source={{
            uri: uberLogo,
        }}
        />

        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})