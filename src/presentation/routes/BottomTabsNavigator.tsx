import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IoICon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = ()=> {
  return (
    <Tab.Navigator
        sceneContainerStyle ={{
            backgroundColor:globalColors.background
        }}

        screenOptions={{
            // headerShown:false
            tabBarActiveTintColor:globalColors.primary,
            tabBarLabelStyle:{
                marginBottom:5
            },
            headerStyle:{
                elevation:0,
                borderColor:'transparent',
                shadowColor:'transparent',
            },
            tabBarStyle:{
                borderTopWidth:0,
                elevation:0
            }
        }}
    >
      <Tab.Screen name="Tab1" options={{title:'Tab 1',tabBarIcon:({color})=>(<IoICon name='accessibility-outline' color={color}/>) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title:'Tab 2',tabBarIcon:({color})=>(<IoICon name='airplane-outline' color={color}/>) }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title:'Tab 3',tabBarIcon:({color})=>(<IoICon name='bar-chart-outline' color={color}/>) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}