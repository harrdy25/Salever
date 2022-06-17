import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import colors from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {clickLogin} from '../redux/action/User.Action';

const EmailLogin = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // let loginData = {
    //   email,
    //   password,
    // };

    dispatch(clickLogin(email, password, navigation));
    setEmail(''),
    setPassword('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.Icon}
            color={colors.appBlue}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.SettingText}>Login</Text>
        </View>
        <View style={{flex: 2}}>
          <Image style={styles.Avatar} source={images.IMG_AVATAR_PNG} />
          <Text style={styles.Text}>Enter your Email to login</Text>
          <Text
            style={{
              marginLeft: normalize(16),
              fontSize: normalize(16),
              marginVertical: normalize(10),
            }}>
            Email
          </Text>
          <View style={styles.EmailBox}>
            <TextInput
              style={styles.TextInput}
              placeholder="enter your email..."
              placeholderTextColor={'gray'}
              autoCapitalize = "none"
              value={email}
              onChangeText={email => setEmail(email)}
            />
          </View>
          <Text
            style={{
              marginLeft: normalize(16),
              fontSize: normalize(16),
              marginVertical: normalize(10),
            }}>
            Password
          </Text>
          <View style={styles.EmailBox}>
            <TextInput
              style={styles.TextInput}
              placeholder="enter your pass..."
              placeholderTextColor={'gray'}
              value={password}
              onChangeText={pass => setPassword(pass)}
            />
          </View>
          <Text
            style={styles.ForgotPass}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot your Password?
          </Text>
          <Text
            style={{
              fontSize: normalize(16),
              margin: normalize(10),
              marginHorizontal: normalize(16),
            }}>
            If you are a new user please select any other login option from
            previous page
          </Text>
        </View>
       
        <View style={{flex: 0.6}}>
          <TouchableOpacity
            style={styles.NextBox}
            onPress={() => {handleLogin();
            }}>
            <Text style={styles.Next}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
    marginLeft: normalize(8),
  },
  SettingText: {
    fontSize: normalize(22),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: normalize(30),
  },
  Avatar: {
    height: normalize(80),
    width: normalize(80),
    borderRadius: normalize(100),
    margin: normalize(16),
  },
  Text: {
    fontSize: normalize(20),
    fontWeight: '600',
    margin: normalize(16),
  },
  TextInput: {
    fontSize: normalize(20),
    fontWeight: '600',
    margin: normalize(10),
  },
  EmailBox: {
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginVertical: normalize(5),
  },
  NextBox: {
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginTop: normalize(100),
    backgroundColor: 'green',
  },
  Next: {
    fontSize: normalize(20),
    fontWeight: '600',
    padding: normalize(10),
    textAlign: 'center',
    color: 'white',
  },
  ForgotPass: {
    fontSize: normalize(20),
    fontWeight: '600',
    color: 'green',
    margin: normalize(16),
    textDecorationLine: 'underline',
  },
});
