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

const Settingss = () => {
  return (
    <SafeAreaView>
      <View>
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
            <Text style={{fontSize: normalize(16)}}>
              Change Password
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
});
