import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../assets/images';
import {normalize} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';


const Notification = ({navigation}) => {
  return (
    <SafeAreaView>
      <>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.Icon1}
            color={colors.appBlue}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.SettingText}>Settings</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />

        <View style={{alignItems: 'center', marginTop: normalize(20)}}>
          <Image style={styles.Icon} source={images.IMG_NotiBell_Png} />
          <Text
            style={{
              fontSize: normalize(22),
              fontWeight: '600',
              marginVertical: normalize(30),
            }}>
            {' '}
            No Notification
          </Text>
          <Text style={{fontSize: normalize(18)}}>
            Check back here for updates!
          </Text>
        </View>
      </>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  Icon: {
    height: normalize(150),
    width: normalize(150),
  },
  Icon1:{
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
});
