import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Link, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './src/screen/Account';
import MyAds from './src/screen/MyAds';
import Chat from './src/screen/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sell from './src/screen/Sell';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/screen/Login';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HOME') {
              iconName = focused ? 'home-circle' : 'home-circle-outline';
            } else if (route.name === 'ACCOUNT') {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            } else if (route.name === 'CHAT') {
              iconName = focused
                ? 'chat-processing'
                : 'chat-processing-outline';
            } else if (route.name === 'MY ADS') {
              iconName = focused ? 'heart-circle' : 'heart-circle-outline';
            } else if (route.name === 'SELL') {
              iconName = focused ? 'plus-circle' : 'plus-circle-outline';
            }
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: '#757575',
        })}>
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="CHAT"
          component={Chat}
          options={{headerShown: false, tabBarBadge: 3}}
        />
        <Tab.Screen name="SELL" component={Sell} />
        <Tab.Screen
          name="MY ADS"
          component={MyAds}
          options={{tabBarBadge: 5}}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Account}
          options={{title: 'My Accounts'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
