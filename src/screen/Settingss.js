import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';

const Settingss = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name='chevron-left' size={40} style={styles.Icon} color={colors.appBlue} onPress={() => navigation.goBack()}/>
          <Text style={styles.SettingText}>Settings</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Notification
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Recommendations & Special communications
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            style={styles.Setting}
          />
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Privacy
            </Text>
            <Text style={{fontSize: normalize(16)}}>Change Password</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            style={styles.Setting}
          />
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Logout from all devices
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Delete account
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
      </View>
    </SafeAreaView>
  );
};

export default Settingss;

const styles = StyleSheet.create({
  Setting: {
    alignSelf: 'center',
  },
  Icon:{
    alignSelf: 'center',
  },
  SettingText:{
    fontSize: normalize(22),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    marginRight: normalize(30)
  }
});
