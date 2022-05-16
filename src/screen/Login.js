import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
      <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name='chevron-left' size={40} style={styles.Icon} color={colors.appBlue} onPress={() => navigation.goBack()}/>
          <Text style={styles.SettingText}>Sign In</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: normalize(80)}}>
          <Image style={styles.LogoIcon} source={images.IMG_OLX_Png} />
          <Text style={styles.OlxText}>Welcome to OLX</Text>
          <Text style={styles.OlxText}>
            The trusted community of buyers and sellers
          </Text>
        </View>
        <TouchableOpacity
          style={styles.ContinueBox}
          onPress={() => navigation.navigate('PhoneLogin')}>
          <Entypo name="mobile" size={30} style={styles.Icon} />
          <Text style={styles.ContinueText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContinueBox}>
          <Ionicons name="logo-google" size={30} style={styles.Icon} />
          <Text style={styles.ContinueText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ContinueBox,
            {backgroundColor: colors.extraLight},
          ]}>
          <Ionicons name="logo-apple" size={30} style={styles.Icon} />
          <Text style={styles.ContinueText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginVertical: normalize(10)}}>
          OR
        </Text>
        <Text
          style={styles.LoginText}
          onPress={() => navigation.navigate('EmailLogin')}>
          Login with Email
        </Text>
        <Text
          style={{
            fontSize: normalize(16),
            textAlign: 'center',
            margin: normalize(16),
          }}>
          if you continue, you are accepting OLX Terms and Conditions and
          Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Icon:{
    alignSelf: 'center',
    marginLeft: normalize(8)
  },
  SettingText:{
    fontSize: normalize(22),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: normalize(30)
  },
  LogoIcon: {
    height: normalize(150),
    width: normalize(250),
  },
  OlxText: {
    fontSize: normalize(20),
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: normalize(10),
    marginHorizontal: normalize(30),
  },
  ContinueBox: {
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ContinueText: {
    fontSize: normalize(20),
    textAlign: 'center',
    padding: normalize(10),
    fontWeight: '600'
  },
  LoginText: {
    fontSize: normalize(18),
    fontWeight: '600',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  Icon: {
    alignSelf: 'center',
  },
});
