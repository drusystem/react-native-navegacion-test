import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

    const navigator = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={{marginBottom:10}}>Settings Screen</Text>
            <PrimaryButton
                label='Atrás'
                onPress={()=>navigator.goBack()}
            />

            <PrimaryButton
                label='Regresar al Home'
                onPress={()=>navigator.dispatch(StackActions.popToTop())}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});