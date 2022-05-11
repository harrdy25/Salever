import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {normalize} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

const ElectronicsAndAppliances = ({navigation}) => {
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
          <Text style={styles.SettingText}>Electronics & Appliances</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>TVs, Video - Audio</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Kitchen & Other Appliances</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Computers & Laptops</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Cameras & Lenses</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Games & Entertainment</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Fridges</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Computer Accessories</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Hard Disk, Printers & Monitors</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>ACs</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>Washing Machines</Text>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.Text}>View all</Text>
        <View style={{borderWidth: normalize(1)}} />
      </View>
    </SafeAreaView>
  );
};

export default ElectronicsAndAppliances;

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
  Text: {
      fontSize: normalize(18),
      fontWeight: '500',
      padding: normalize(10)
  }
});
 ;

