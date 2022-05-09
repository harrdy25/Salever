import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Account = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{margin: normalize(10), flexDirection: 'row'}}>
          <Image style={styles.ProfilePic} source={images.IMG_KUKU2_PNG} />
          <View style={{alignSelf: 'center', marginLeft: normalize(10)}}>
            <Text style={styles.ProfileName}>Hardik Kuk's</Text>
            <Text style={styles.ProfileEdit}>View and edit profile</Text>
          </View>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <View style={{flexDirection: 'row', margin: normalize(10)}}>
          <MaterialCommunityIcons name="account-supervisor-outline" size={40} />
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              My Network
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Follower, following and find friends
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={40} />
        </View>
        <View style={{borderWidth: normalize(1)}} />


        <View style={{flexDirection: 'row', margin: normalize(10)}}>
          <MaterialCommunityIcons name="id-card" size={40} />
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Buy Packages & My orders
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Packages, orders, invoice & billing information
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={40} />
        </View>
        <View style={{borderWidth: normalize(1)}} />


        <View style={{flexDirection: 'row', margin: normalize(10)}}>
          <Ionicons name="ios-settings-sharp" size={40} />
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Settings
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              privacy and logout
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={40} />
        </View>
        <View style={{borderWidth: normalize(1)}} />


        <View style={{flexDirection: 'row', margin: normalize(10)}}>
          <MaterialCommunityIcons name="help-rhombus" size={40} />
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Help and Support
            </Text>
            <Text style={{fontSize: normalize(16)}}>
             Help center, Terms and conditions, Privacy policy
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={40} />
        </View>
        <View style={{borderWidth: normalize(1)}} />
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  ProfilePic: {
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(100),
  },
  ProfileName: {
    fontSize: normalize(22),
    fontWeight: '700',
  },
  ProfileEdit: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginTop: normalize(10),
  },
});
