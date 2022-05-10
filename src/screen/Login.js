import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../theme/colors';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{alignItems: 'center', marginTop: normalize(80)}}>
          <Image style={styles.LogoIcon} source={images.IMG_OLX_Png} />
          <Text style={styles.OlxText}>Welcome to OLX</Text>
          <Text style={styles.OlxText}>The trusted community of buyers and sellers</Text>
        </View>
        <TouchableOpacity style={styles.ContinueBox}>
          <Text style={styles.ContinueText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContinueBox}>
          <Text style={styles.ContinueText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ContinueBox,{backgroundColor: colors.blackTransparent}]}>
          <Text style={styles.ContinueText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginVertical: normalize(10)}}>OR</Text>
        <Text style={styles.LoginText}>Login with Email</Text>
        <Text style={{fontSize: normalize(16), textAlign: 'center', margin: normalize(10)}}>if you continue, you are accepting OLX Terms and Conditions and Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  LogoIcon: {
    height: normalize(150),
    width: normalize(250),
  },
  OlxText: {
    fontSize: normalize(20), 
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: normalize(10),
    marginHorizontal: normalize(30)
  },
  ContinueBox: {
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    marginHorizontal: normalize(10),
    marginVertical: normalize(5)
  },
  ContinueText: {
    fontSize: normalize(20),
    textAlign: 'center',
    padding: normalize(10)
  },
LoginText: {
  fontSize: normalize(18),
  fontWeight: '600',
  textAlign: 'center',
  textDecorationLine: 'underline'
}
});
