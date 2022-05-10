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

const PackagesandOrder = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity style={{flexDirection: 'row', margin: normalize(10)}}>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text style={{fontSize: normalize(18), fontWeight: '600'}}>
              Buy Packages
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Sell faster, more & higher margins with Packages
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
              My Orders
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Active, scheduled and expired orders
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
              Invoice
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              See and download your invoices
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
              Billing Information{' '}
            </Text>
            <Text style={{fontSize: normalize(16)}}>
              Edit your billing name, adress, etc.
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            style={styles.Setting}
          />
        </TouchableOpacity>
        <View style={{borderWidth: normalize(1)}} />
      </View>
    </SafeAreaView>
  );
};

export default PackagesandOrder;

const styles = StyleSheet.create({
  Setting: {
    alignSelf: 'center',
  },
});
