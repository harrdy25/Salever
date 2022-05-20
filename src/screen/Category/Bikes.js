import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {normalize} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

const Bikes = ({navigation}) => {

  return (
    <SafeAreaView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.Icon}
            color={colors.appBlue}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.SettingText}>Bikes</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text} onPress={() => navigation.navigate('ProductUpload')}>Motorcycles</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Scooters</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Spare Parts</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Bicycles</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>View all</Text>
        <View style={{borderWidth: normalize(1)}} />
      </View>
    </SafeAreaView>
  );
};

export default Bikes;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
    marginLeft: normalize(8)

  },
  SettingText: {
    fontSize: normalize(22),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: normalize(30),
  },
  Text: {
      fontSize: normalize(18),
      fontWeight: '500',
      padding: normalize(10),
    marginLeft: normalize(8)

  }
});
