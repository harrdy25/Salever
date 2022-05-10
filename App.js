import {SafeAreaView, Settings, StyleSheet, Text, View} from 'react-native';
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
import PackagesandOrder from './src/screen/PackagesandOrder';
import Settingss from './src/screen/Settingss';
import Notification from './src/screen/Notification';
import Cars from './src/screen/Cars';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

function TabHandler() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'ACCOUNT') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          } else if (route.name === 'CHAT') {
            iconName = focused ? 'chat-processing' : 'chat-processing-outline';
          } else if (route.name === 'MY ADS') {
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
          } else if (route.name === 'SELL') {
            iconName = focused ? 'plus-circle' : 'plus-circle-outline', size=40;
          }
          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#757575',
      })}>
      <Tab.Screen name="HOME" component={HomeScreenStack} options={{headerShown: false}} />
      <Tab.Screen
        name="CHAT"
        component={Chat}
        options={{headerShown: false, tabBarBadge: 3}}
      />
      <Tab.Screen name="SELL" component={Sell} />
      <Tab.Screen name="MY ADS" component={MyAds} options={{tabBarBadge: 5}} />
      <Tab.Screen
        name="ACCOUNT"
        component={AccountScreenStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <HomeStack.Screen
        name="Login"
        // options={{headerShown: false}}
        component={Login}
      />
      <HomeStack.Screen name='Notification' component={Notification} />
      <HomeStack.Screen name='Cars' component={Cars} />

    </HomeStack.Navigator>
  );
}

function AccountScreenStack() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        options={{headerShown: false}}
        component={Account}
      />
      <AccountStack.Screen
        name="PackagesandOrder"
        options={{title: 'Buy Packages $ My Order'}}
        component={PackagesandOrder}
      />
      <AccountStack.Screen
        name="Settingss"
        options={{title: 'Settings'}}
        component={Settingss}
      />
    </AccountStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabHandler} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="MyAds" component={MyAds} />
        <Drawer.Screen name="Account" component={Account} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
 
});
