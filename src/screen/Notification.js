import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { images } from '../assets/images';
import { normalize } from '../utils';

const Notification = () => {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: normalize(20)}}>
          <Image style={styles.Icon} source={images.IMG_NotiBell_Png} />
        <Text style={{fontSize: normalize(22), fontWeight: '600', marginVertical: normalize(30)}}> No Notification</Text>
        <Text style={{fontSize: normalize(18)}}>Check back here for updates!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
    Icon:{
        height: normalize(150),
        width: normalize(150),
    }
});
