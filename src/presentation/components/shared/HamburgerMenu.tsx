import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable} from 'react-native'
import { IoICon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <Pressable 
                    style={{marginLeft:5}}
                    onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IoICon name='menu-outline' color={globalColors.primary}/>
                </Pressable>
            )
        })
    },[])

    return (
        <>
        </>
    )
}