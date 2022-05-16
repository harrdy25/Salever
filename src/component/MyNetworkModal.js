import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {normalize} from '../utils';
import {images} from '../assets/images';

const MyNetwork = ({visible, onClose}) => {
  const [screen, setScreen] = useState(0);
  const [line, setLine] = useState(1);

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <SafeAreaView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="cross"
              size={40}
              style={styles.Icon}
              onPress={onClose}
            />
            <Text style={styles.TitleName}>My network</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: normalize(10)}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                setLine(1);
                setScreen(0);
              }}>
              <Text style={styles.AdsText}>FOLLOWERS</Text>
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
              <Text style={styles.Favourites}>FOLLOWING</Text>
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
          <View style={{borderWidth: normalize(1), marginTop: normalize(10)}} />
          <View style={{flexDirection: 'row'}}>
            <Entypo name="share" size={40} style={styles.ShareIcon} />
            <Text
              style={{
                fontSize: normalize(18),
                alignSelf: 'center',
                marginLeft: normalize(20),
              }}>
              Invite your friends to OLX!
            </Text>
          </View>
          <View style={{borderWidth: normalize(1)}} />
          {screen === 0 && (
            <View
              style={{
                alignItems: 'center',
                marginVertical: normalize(50),
                marginHorizontal: normalize(10),
              }}>
              <Text
                style={{
                  fontSize: normalize(20),
                  marginVertical: normalize(50),
                }}>
                You don't have Followers yet.                
              </Text>
              <Text style={{fontSize: normalize(20), textAlign: 'center', marginHorizontal: normalize(8)}}>
              Chat post or start following somebody so they can follow you.                
              </Text>
            </View>
          )}
          {screen === 1 && (
            <View
              style={{
                alignItems: 'center',
                marginVertical: normalize(50),
                marginHorizontal: normalize(10),
              }}>
              <Text
                style={{
                  fontSize: normalize(20),
                  marginVertical: normalize(50),
                }}>
                You are not Following anyone yet.
              </Text>
              <Text style={{fontSize: normalize(20), textAlign: 'center',marginHorizontal: normalize(8)}}>
                Start following people you know or like and get nitifed when they post something new!
              </Text>
            </View>
          )}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={styles.MessageIcon} source={images.IMG_Message_Png} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default MyNetwork;

const styles = StyleSheet.create({
  TitleName: {
    fontSize: normalize(22),
    fontWeight: '600',
    alignSelf: 'center',
    flex: 2,
  },
  Icon: {
    flex: 1,
    marginLeft: normalize(8)
  },
  AdsText: {
    fontSize: normalize(22),
    fontWeight: '600',
    textAlign: 'center',
  },
  Favourites: {
    fontSize: normalize(22),
    fontWeight: '600',
    textAlign: 'center',
  },
  ShareIcon: {
    alignSelf: 'center',
    marginHorizontal: normalize(16),
    marginVertical: normalize(10)
  },
  MessageIcon: {
    height: normalize(200),
    width: normalize(200),
  },
});
