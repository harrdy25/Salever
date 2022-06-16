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
import Cars from './src/screen/Category/Cars';
import EmailLogin from './src/screen/EmailLogin';
import PhoneLogin from './src/screen/PhoneLogin';
import Profile from './src/screen/Profile';
import Properties from './src/screen/Category/Properties';
import Mobiles from './src/screen/Category/Mobiles';
import Jobs from './src/screen/Category/Jobs';
import Bikes from './src/screen/Category/Bikes';
import ElectronicsAndAppliances from './src/screen/Category/ElectronicsAndAppliances';
import CommercialVehiclesAndSpares from './src/screen/Category/CommercialVehiclesAndSpares';
import Furniture from './src/screen/Category/Furniture';
import Fashion from './src/screen/Category/Fashion';
import BooksSportsAndHpbbies from './src/screen/Category/BooksSportsAndHpbbies';
import Pets from './src/screen/Category/Pets';
import Services from './src/screen/Category/Services';
import {Provider} from 'react-redux';
import Details from './src/screen/Details';
import ForgotPassword from './src/screen/ForgotPassword';
import ProductUpload from './src/screen/ProductUpload';
import {PersistGate} from 'redux-persist/integration/react';
import Counter from './src/screen/Counter';
import { configStore, persistor} from './src/redux/store';

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
            (iconName = focused ? 'plus-circle' : 'plus-circle-outline'),
              (size = 40);
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#757575',
      })}>
      <Tab.Screen
        name="HOME"
        component={HomeScreenStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CHAT"
        component={Chat}
        options={{headerShown: false, tabBarBadge: 3}}
      />
      <Tab.Screen name="SELL" component={Sell} options={{headerShown: false}} />
      <Tab.Screen
        name="MY ADS"
        component={MyAds}
        options={{tabBarBadge: 5, headerShown: false}}
      />
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
        options={{headerShown: false}}
        component={Login}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PhoneLogin"
        component={PhoneLogin}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Cars"
        component={Cars}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Properties"
        component={Properties}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Mobiles"
        component={Mobiles}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Jobs"
        component={Jobs}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Bikes"
        component={Bikes}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ElectronicsAndAppliances"
        component={ElectronicsAndAppliances}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CommercialVehiclesAndSpares"
        component={CommercialVehiclesAndSpares}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Furniture"
        component={Furniture}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Fashion"
        component={Fashion}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="BooksSportsAndHpbbies"
        component={BooksSportsAndHpbbies}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Pets"
        component={Pets}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProductUpload"
        component={ProductUpload}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Counter"
        component={Counter}
        options={{headerShown: false}}
      />
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
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="Settingss"
        options={{headerShown: false}}
        component={Settingss}
      />
    </AccountStack.Navigator>
  );
}

const App = () => {
  // const {store,persistor} = configStore();

  return (
    <Provider store={configStore}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Drawer.Screen
              name="Home"
              component={TabHandler}
              options={{
                drawerIcon: ({focused, size}) => (
                  <MaterialCommunityIcons
                    name="home-circle"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                drawerIcon: ({focused, size}) => (
                  <MaterialCommunityIcons
                    name="snowman"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Chat"
              component={Chat}
              options={{
                drawerIcon: ({focused, size}) => (
                  <MaterialCommunityIcons
                    name="chat-processing"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Notification"
              component={Notification}
              options={{
                drawerIcon: ({focused, size}) => (
                  <Ionicons
                    name="ios-notifications-circle"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Settingss"
              component={Settingss}
              options={{
                drawerIcon: ({focused, size}) => (
                  <Ionicons name="settings" size={size} color={'green'} />
                ),
              }}
            />
            <Drawer.Screen
              name="Account"
              component={Account}
              options={{
                drawerIcon: ({focused, size}) => (
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Logout"
              component={Login}
              options={{
                drawerIcon: ({focused, size}) => (
                  <MaterialCommunityIcons
                    name="logout"
                    size={size}
                    color={'green'}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
