import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {images} from '../assets/images';

const MyAds = () => {
  const [screen, setScreen] = useState(0);
  const [line, setLine] = useState(1);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row', marginTop: normalize(10)}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLine(1);
              setScreen(0);
            }}>
            <Text style={styles.AdsText}>Ads</Text>
            {line === 1 && (
              <View
                style={{
                  borderWidth: normalize(3),
                  flex: 1,
                  borderColor: 'green',
                  marginTop: normalize(10),
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLine(2);
              setScreen(1);
            }}>
            <Text style={styles.Favourites}>Favourites</Text>
            {line === 2 && (
              <View
                style={{
                  borderWidth: normalize(3),
                  flex: 1,
                  borderColor: 'green',
                  marginTop: normalize(10),
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: normalize(1), borderColor: '#616161'}} />
        {screen === 0 && (
          <>
            <TouchableOpacity
              style={{flexDirection: 'row', margin: normalize(10)}}>
              <Text style={styles.ViewAll}>View all(0)</Text>
              <Ionicons name="chevron-down" size={30} />
            </TouchableOpacity>
            <View style={{borderWidth: normalize(1), borderColor: '#616161'}} />
            
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.Kuku} source={images.IMG_KUKU_PNG} />
              <Text
                style={{
                  fontSize: normalize(20),
                  color: '#616161',
                  marginVertical: normalize(10),
                }}>
                You haven't listed anything yet
              </Text>
              <Text style={{fontSize: normalize(16), color: '#616161'}}>
                Let go of what you don't use anymore
              </Text>
            </View>
            <TouchableOpacity style={styles.SellingBox}>
              <Text style={styles.Selling}>Start Selling</Text>
            </TouchableOpacity>
          </>
        )}
        {screen === 1 && (
          <>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.Kuku1} source={images.IMG_KUKU1_PNG} />
              <Text
                style={{
                  fontSize: normalize(20),
                  marginVertical: normalize(10),
                  color: '#616161',
                }}>
                You haven't liked anything yet
              </Text>
              <Text
                style={{
                  fontSize: normalize(16),
                  textAlign: 'center',
                  color: '#616161',
                }}>
                mark the items that you like and share it with the world!
              </Text>
            </View>
            <TouchableOpacity style={styles.SellingBox}>
              <Text style={styles.Selling}>Discover</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyAds;

const styles = StyleSheet.create({
  AdsText: {
    fontSize: normalize(22),
    fontWeight: '600',
    textAlign: 'center',
    color: '#616161',
  },
  Favourites: {
    fontSize: normalize(22),
    fontWeight: '600',
    textAlign: 'center',
    color: '#616161',
  },
  ViewAll: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginRight: normalize(8),
    color: '#616161',
  },
  Kuku: {
    height: normalize(300),
    width: normalize(300),
    marginTop: normalize(40),
  },
  SellingBox: {
    backgroundColor: 'green',
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginVertical: normalize(20),
  },
  Selling: {
    fontSize: normalize(20),
    fontWeight: '600',
    padding: normalize(8),
    textAlign: 'center',
  },
  Kuku1: {
    height: normalize(300),
    width: normalize(300),
    marginTop: normalize(40),
  },
});
