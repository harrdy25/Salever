import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="chevron-back-outline" size={40} style={styles.Icon} />
          <Ionicons
            name="ios-share-social-outline"
            size={35}
            style={styles.IconS}
          />
          <Ionicons name="heart-outline" size={35} style={styles.IconS} />
        </View>
        <View
          style={{
            borderWidth: normalize(1),
            marginVertical: normalize(5),
            borderColor: '#616161',
          }}
        />
        <ScrollView>
          <>
            <View>
              <Image style={styles.Image} source={images.IMG_Iphone8_Png} />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: normalize(20),
                  margin: normalize(8),
                }}>
                ₹ 14,000
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: normalize(18),
                  marginLeft: normalize(8),
                }}>
                Iphone 8 plus 64gb
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: normalize(16),
                  marginHorizontal: normalize(8),
                }}>
                <Ionicons name="md-location" size={20} />
                <Text
                  style={{
                    flex: 1,
                    fontSize: normalize(14),
                    marginLeft: normalize(8),
                    alignSelf: 'center',
                    fontWeight: '600',
                  }}>
                  Subhash Nagar
                </Text>
                <Text
                  style={{
                    fontSize: normalize(14),
                    alignSelf: 'center',
                    fontWeight: '600',
                  }}>
                  25 Jan
                </Text>
              </View>
            </View>
            <View style={{borderColor: '#616161', borderWidth: normalize(2)}} />
            <Text
              style={{
                fontWeight: '600',
                fontSize: normalize(18),
                margin: normalize(8),
              }}>
              Details
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: normalize(18),
                  margin: normalize(8),
                  flex: 1,
                }}>
                Brand
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: normalize(18),
                  margin: normalize(8),
                }}>
                iPhone
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '600',
                fontSize: normalize(18),
                margin: normalize(8),
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: normalize(16),
                marginLeft: normalize(8),
                marginBottom: normalize(8),
                fontWeight: '600',
              }}>
              We deal in new. second hand and refuribished iphones
            </Text>
            <View style={{borderColor: '#616161', borderWidth: normalize(2)}} />
            <Text
              style={{
                fontWeight: '700',
                fontSize: normalize(20),
                margin: normalize(8),
              }}>
              Seller Profile
            </Text>
            <View
              style={{flexDirection: 'row', marginHorizontal: normalize(8)}}>
              <Image
                style={styles.ProfilePic}
                source={images.IMG_Iphone8_Png}
              />
              <View style={{alignSelf: 'center', marginLeft: normalize(16)}}>
                <Text style={{fontSize: normalize(16), fontWeight: '600'}}>Harrdy Kukadiya</Text>
                <Text style={{fontSize: normalize(14),marginVertical: normalize(3)}}>Member since JUL 2021</Text>
                <Text style={{fontSize: normalize(16), fontWeight: '600', textDecorationLine: 'underline'}}>View profile</Text>
              </View>
            </View>
            <View></View>
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  Icon: {
    flex: 1,
    marginLeft: normalize(8),
  },
  IconS: {
    alignSelf: 'center',
    marginHorizontal: normalize(16),
  },
  Image: {
    height: 300,
    width: '100%',
    // resizeMode: 'stretch',
    // "center","contain","cover","repeat","stretch"
  },
  ProfilePic: {
    height: 80,
    width: 80,
    resizeMode: 'stretch',
    borderRadius: normalize(80),
  },
});
