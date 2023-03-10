import { FlatList, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen", // Change in Future
    }
]
const rightArrow = "https://img.icons8.com/ios-glyphs/90/null/circled-right.png"
const NavOptions = () => {
const navigation = useNavigation();
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor = {(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`,{left : 750}]}>
                <View>
                    <Image
                    style={{width:120, height: 120, resizeMode: "contain"}}
                    source={{uri : item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Image
                    style={[tw`rounded-full w-10 mt-5 ml-8`,{ height: 45, resizeMode: "contain"}]}
                    source={{uri : rightArrow}}
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions