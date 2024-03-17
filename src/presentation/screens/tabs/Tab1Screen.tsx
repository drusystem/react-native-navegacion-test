import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';
import { IoICon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {

    

    return (
        <View>
            <HamburgerMenu/>
            <Text>Tab1Screen</Text>
            <IoICon name="rocket-outline" size={30} color="#900"/>
            {/* <Icon name="rocket-outline" size={30} color="#900" /> */}
        </View>
    )
}