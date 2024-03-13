import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>Menú</Text>
                </Pressable>
            )
        })
    },[])

    return (
        <>
        </>
    )
}