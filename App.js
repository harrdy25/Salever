import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Settings from './src/screen/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './src/screen/Account';
import MyAds from './src/screen/MyAds';
import Chat from './src/screen/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HOME') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'ACCOUNT') {
              iconName = focused 
              ? 'grid' 
              : 'grid-outline';
            } else if (route.name === 'CHAT') {
              iconName = focused 
              ? 'ios-chatbubbles' 
              : 'ios-chatbubbles-outline'
            } else if (route.name === 'MY ADS') {
              iconName = focused 
              ? 'heart' 
              : 'ios-heart-outline'
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: '#757575',
        })}>
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{headerShown: false}}         
        />
        <Tab.Screen name="CHAT" component={Chat} options={{ headerShown: false, tabBarBadge: 3}} />
        <Tab.Screen name="MY ADS" component={MyAds} options={{ tabBarBadge: 5 }} />
        <Tab.Screen name="ACCOUNT" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
