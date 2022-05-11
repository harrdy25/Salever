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
import {ScrollView} from 'react-native-gesture-handler';

const Jobs = ({navigation}) => {
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
          <Text style={styles.SettingText}>Jobs</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />

        <ScrollView>
          <>
            <Text style={styles.Text}>Data entry & Back office</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Sales & Marketing</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>BPO & Teachers</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Driver</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Office Assistant</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Delivery & Collection</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Teacher</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Cook</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Receptionist & Front office</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Operator & Technician</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>IT Engineer & Technician</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Hotel & Travel Executive</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Accountant</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Designer</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>Other Jobs</Text>
            <View style={{borderWidth: normalize(1)}} />
            <Text style={styles.Text}>View all</Text>
            <View style={{borderWidth: normalize(1)}} />
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Jobs;

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
    padding: normalize(10),
  },
});
