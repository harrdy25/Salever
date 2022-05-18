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
import {useDispatch} from 'react-redux';
import { SignUpUser } from '../redux/action/User.Action';

const PhoneLogin = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleUser = () => {
    let data = {
      name,
      email,
      password,
      phone,
    }
    dispatch(SignUpUser(data))
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Entypo
          name="chevron-left"
          size={35}
          style={styles.MenuIcon}
          onPress={() => navigation.navigate('Login')}
        />
        <View style={{alignItems: 'center'}}>
          <Image style={styles.Logo} source={images.IMG_AVATAR_PNG} />
        </View>
        <Text style={styles.SignUp}>SIGN UP</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Name"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Email"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={[styles.NameBox, {flexDirection: 'row'}]}>
          <TextInput
            style={styles.Name}
            placeholder="Password"
            secureTextEntry={hidePass ? true : false}
            placeholderTextColor={'gray'}
            onChangeText={(text) => setPassword(text)}
            flex={1}
          />
          <Ionicons
            name={hidePass ? 'eye-off' : 'eye'}
            style={styles.EyeIcon}
            size={20}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Phone no"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.SignUpBox}
          onPress={() => handleUser()}>
          <Text style={styles.Sign}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: normalize(20),
          }}>
          <Ionicons name="logo-google" style={styles.MenuIcon} size={30} />
          <Ionicons name="logo-facebook" style={styles.MenuIcon} size={30} />
          <Ionicons name="logo-twitter" style={styles.MenuIcon} size={30} />
        </View>
        <Text style={{fontSize: normalize(18), textAlign: 'center'}}>
          You have an account already?{'  '}
          <Text
            style={styles.Login}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PhoneLogin;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: normalize(8),
  },
  Logo: {
    height: 100,
    width: 100,
    borderRadius: normalize(100),
  },
  SignUp: {
    fontSize: normalize(22),
    fontWeight: '700',
    marginLeft: normalize(16),
    marginVertical: normalize(10),
  },
  NameBox: {
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    marginHorizontal: normalize(16),
    marginVertical: normalize(10),
    borderColor: 'gray',
  },
  Name: {
    fontSize: normalize(20),
    padding: normalize(10),
  },
  SignUpBox: {
    borderRadius: normalize(8),
    marginHorizontal: normalize(16),
    backgroundColor: 'green',
    marginTop: normalize(20),
  },
  Sign: {
    fontSize: normalize(26),
    padding: normalize(8),
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  Login: {
    fontSize: normalize(22),
    fontWeight: '600',
    color: 'green',
  },
  EyeIcon: {
    alignSelf: 'center',
    marginRight: normalize(16),
  },
});
