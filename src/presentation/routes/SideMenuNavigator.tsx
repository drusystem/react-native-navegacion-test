import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IoICon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = ()=> {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 

      drawerContent={(props)=><CustomDrawerContent {...props}/>}

      screenOptions={{
        headerShown:false,
        drawerType:dimensions.width>=758 ? 'permanent':'slide',
        drawerActiveBackgroundColor:globalColors.primary,
        drawerActiveTintColor:'white',
        drawerInactiveTintColor:globalColors.primary,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigation" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon:({color})=>(<IoICon name='bonfire-outline' color={color}/>)}} name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen options={{drawerIcon:({color})=>(<IoICon name='person-circle-outline' color={color}/>)}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props:DrawerContentComponentProps) =>{

  return (
    <DrawerContentScrollView>
        <View
          style={{
            height:200,
            backgroundColor:globalColors.primary,
            margin:30,
            borderRadius:50
          }}
        />

        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}