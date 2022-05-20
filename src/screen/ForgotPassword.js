import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {images} from '../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {normalize} from '../utils';

const ForgotPassword = ({navigation}) => {
  const [screen, setScreen] = useState(0);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="chevron-left"
            size={35}
            color={'gray'}
            style={styles.MenuIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>Forgot Password</Text>
        </View>
        <View style={{borderWidth: 1, borderColor:'gray'}} />
        <View style={{alignItems: 'center', marginVertical: normalize(10)}}>
          <Image style={styles.Logo} source={images.IMG_AVATAR_PNG} />
        </View>
        {screen === 0 && (
          <>
            <View style={{marginHorizontal: normalize(16)}}>
              <Text style={[styles.Details, {fontWeight: '600'}]}>
                Please Enter your registered email & mobile number
              </Text>
              <Text style={styles.Details}>
                We will send a verification code to your registered email &
                mobile number
              </Text>
            </View>
            <View style={styles.NameBox}>
              <TextInput
                style={styles.Name}
                placeholder="Email / Number"
                placeholderTextColor={'gray'}
              />
            </View>
            <TouchableOpacity
              style={styles.NextBox}
              onPress={() => setScreen(1)}>
              <Text style={styles.Next}>Next</Text>
            </TouchableOpacity>
          </>
        )}
        {screen === 1 && (
          <>
            <View style={{marginHorizontal: normalize(16)}}>
              <Text style={[styles.Details, {fontWeight: '600'}]}>
                Please Enter your verification code
              </Text>
              <Text style={styles.Details}>
                We have sent a verification code to your registered email &
                mobile number
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.CodeBox}>
                <TextInput
                  style={styles.Name}
                  placeholder="-"
                  maxLength={1}
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.CodeBox}>
                <TextInput
                  style={styles.Name}
                  placeholder="-"
                  maxLength={1}
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.CodeBox}>
                <TextInput
                  style={styles.Name}
                  placeholder="-"
                  maxLength={1}
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.CodeBox}>
                <TextInput
                  style={styles.Name}
                  placeholder="-"
                  maxLength={1}
                  placeholderTextColor={'gray'}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.NextBox}
              onPress={() => setScreen(2)}>
              <Text style={styles.Next}>Next</Text>
            </TouchableOpacity>
          </>
        )}
        {screen === 2 && (
          <>
            <View style={{marginHorizontal: normalize(16)}}>
              <Text
                style={[
                  styles.Details,
                  {fontWeight: '600', marginBottom: normalize(16)},
                ]}>
                Please Enter new Password
              </Text>
            </View>
            <View style={[styles.NameBox, {flexDirection: 'row'}]}>
              <TextInput
                style={styles.Name}
                placeholder="enter new password"
                placeholderTextColor={'gray'}
                flex={1}
                secureTextEntry={hidePass ? true : false}
              />
              <Ionicons
                name={hidePass ? 'eye-off' : 'eye'}
                style={styles.EyeIcon}
                size={20}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
            <View style={[styles.NameBox, {flexDirection: 'row'}]}>
              <TextInput
                style={styles.Name}
                placeholder="confirmed password"
                placeholderTextColor={'gray'}
                flex={1}
                secureTextEntry={hidePass2 ? true : false}
              />
              <Ionicons
                name={hidePass2 ? 'eye-off' : 'eye'}
                style={styles.EyeIcon}
                size={20}
                onPress={() => setHidePass2(!hidePass2)}
              />
            </View>
            <TouchableOpacity
              style={styles.NextBox}
              onPress={() => navigation.goBack()}>
              <Text style={styles.Next}>Confirm</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: normalize(8),
  },
  Title: {
    fontSize: normalize(22),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    marginRight: normalize(60),
    color: 'gray'
  },
  Logo: {
    height: 120,
    width: 120,
    marginVertical: normalize(40),
    borderRadius: normalize(50),
  },
  Details: {
    fontSize: normalize(20),
    marginHorizontal: normalize(16),
    textAlign: 'center',
    marginTop: normalize(32),
    color: 'gray'

  },
  NameBox: {
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    marginHorizontal: normalize(16),
    marginVertical: normalize(16),
    borderColor: 'gray',
  },
  Name: {
    fontSize: normalize(20),
    padding: normalize(10),
    textAlign: 'center',
  },
  CodeBox: {
    width: 50,
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    marginVertical: normalize(32),
    borderColor: 'gray',
    alignSelf: 'center',
  },
  NextBox: {
    borderRadius: normalize(8),
    marginHorizontal: normalize(16),
    backgroundColor: 'green',
    marginTop: normalize(32),
  },
  Next: {
    fontSize: normalize(20),
    padding: normalize(10),
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  EyeIcon: {
    alignSelf: 'center',
    marginRight: normalize(16),
  },
});
