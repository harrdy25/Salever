import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import colors from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const EmailLogin = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name='chevron-left' size={40} style={styles.Icon} color={colors.appBlue} onPress={() => navigation.goBack()}/>
          <Text style={styles.SettingText}>Login</Text>
        </View>
        <View style={{flex: 2}}>
          <Image style={styles.Avatar} source={images.IMG_AVATAR_PNG} />
          <Text style={styles.Text}>Enter your Email to login</Text>
          <Text style={{margin: normalize(10), fontSize: normalize(16)}}>
            Email
          </Text>
          <View style={styles.EmailBox}>
            <TextInput style={styles.Text} placeholder="enter your email..." />
          </View>
          <Text style={{margin: normalize(10), fontSize: normalize(16)}}>
            Password
          </Text>
          <View style={styles.EmailBox}>
            <TextInput style={styles.Text} placeholder="enter your pass..." />
          </View>
          <Text style={styles.ForgotPass}>Forgot your Password?</Text>
          <Text style={{fontSize: normalize(16), margin: normalize(10)}}>If you are a new user please select any other login option from previous page</Text>
        </View>
        <View style={{flex: 0.6}}>
          <TouchableOpacity style={styles.NextBox}>
            <Text style={styles.Next}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  Icon:{
    alignSelf: 'center',
  },
  SettingText:{
    fontSize: normalize(22),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: normalize(30)
  },
  Avatar: {
    height: normalize(80),
    width: normalize(80),
    borderRadius: normalize(100),
    margin: normalize(10),
  },
  Text: {
    fontSize: normalize(20),
    fontWeight: '600',
    margin: normalize(10),
  },
  EmailBox: {
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    marginHorizontal: normalize(10),
    marginVertical: normalize(5)
  },
  NextBox: {
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    marginHorizontal: normalize(10),
    marginTop: normalize(100),
    backgroundColor: colors.blackTransparent,
  },
  Next: {
    fontSize: normalize(20),
    fontWeight: '600',
    padding: normalize(10),
    textAlign: 'center',
    color: 'white'
  },
  ForgotPass: {
      fontSize: normalize(20),
      fontWeight: '600',
      color: colors.appBlue,
      margin: normalize(10),
      textDecorationLine: 'underline'
  }
});
