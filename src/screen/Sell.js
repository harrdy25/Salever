import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';
import CategoriesData from '../component/CategoriesData';

const Sell = ({navigation}) => {
  const Categories = CategoriesData;

  const renderCategories = ({item}) => (
    <View style={{flex: 1}}>
      <View style={styles.ItemBox}>
        <Image style={styles.Images} source={item.image} />
        <View style={{width: normalize(100)}}>
          <Text style={styles.Text}>{item.text}</Text>
        </View>
      </View>
    </View>
  );
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
          <Text style={styles.SettingText}>What are you offering?</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <View>
          <FlatList
            data={Categories}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sell;

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
  Images: {
    height: normalize(50),
    width: normalize(50),
    alignSelf: 'center',
  },
  ItemBox: {
    borderWidth: normalize(1),
    alignItems: 'center',
    height: normalize(150),
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    fontSize: normalize(14),
    textAlign: 'center',
  },
});
