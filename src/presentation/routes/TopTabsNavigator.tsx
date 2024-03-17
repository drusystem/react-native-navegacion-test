import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = ()=> {
  return (
    <>
        <HamburgerMenu/>
        <Tab.Navigator
          screenOptions={
            {
              tabBarActiveTintColor:globalColors.primary,
              tabBarIndicatorStyle:{
                backgroundColor:globalColors.primary
              }
            }
          }
        >
            <Tab.Screen name="Perfil" component={ProfileScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    </>
  );
}