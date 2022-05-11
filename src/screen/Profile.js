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

const Profile = ({navigation}) => {
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
          <Text style={styles.SettingText}>Profile</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.Avatar} source={images.IMG_AVATAR_PNG} />
          <View style={{flex: 1, alignSelf: 'center', marginTop: normalize(20)}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.Followers}>251</Text>
                <Text style={styles.Followers}>Follower</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.Followers}>94</Text>
                <Text style={styles.Followers}>Following</Text>
              </View>
            </View>
            <View style={styles.EditBox}>
              <Text style={styles.EditText}>Edit profile</Text>
            </View>
          </View>
        </View>
        <Text style={styles.ProfileName}>Hardik Kuk's</Text>
        <Text style={styles.Member}>Member since Feb, 2017</Text>
        <View style={{borderWidth: normalize(2), marginTop: normalize(100), borderColor: colors.gray4}}/>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
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
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(100),
    margin: normalize(10),
  },
  Followers: {
    fontSize: normalize(20),
    alignSelf: 'center',
  },
  EditBox: {
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    margin: normalize(10)
  },
  EditText: {
    fontSize: normalize(20),
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    padding: normalize(8),
  },
  ProfileName: {
      fontSize: normalize(20),
      fontWeight: '600',
      marginLeft: normalize(10),      
  },
  Member: {
    fontSize: normalize(16),
    fontWeight: '700',
    marginLeft: normalize(10),
    color: colors.gray
}
});
