import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import ChatScreen from '../screens/ChatScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function Navigation() {

      return (
            <NavigationContainer >
                  <Tab.Navigator 
                        screenOptions={ ({ route }) => ({

                              headerShown: false,
                              tabBarShowLabel: false,

                              tabBarIcon: ({ focused, color, size }) => {
                                    let iconName: any;
                                    if (route.name === 'Home') {
                                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                                        size = 48;
                                    } else if (route.name === 'Chat') {
                                          iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
                                          size = 48;
                                    } else if (route.name === 'Cart') {
                                          iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                                          size = 48;
                                    } else if (route.name === 'Settings') {
                                        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                                        size = 48;
                                    }
                                    return <Ionicons name={iconName} size={size} color={color} />;
                                },
         
                              // tabBarActiveTintColor: '#25E698',
                              tabBarActiveTintColor: '#e6c625',
                              // tabBarInactiveTintColor: '#FF914D', 
                              tabBarInactiveTintColor: '#4dfff0', 
                              tabBarStyle: { backgroundColor: '#31303A', borderTopColor:'#31303A', paddingTop: 8, paddingBottom: 10, minHeight: 64, width: 390 } 
                        })}
                        >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Chat" component={ChatScreen} />
                        <Tab.Screen name="Cart" component={CheckOutScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                  </Tab.Navigator>
            </NavigationContainer>
      )
}

