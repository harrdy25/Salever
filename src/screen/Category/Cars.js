import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../theme/colors';
import SellingItem from '../../component/SellingItem';

const Cars = ({navigation}) => {
  const ItemData = SellingItem;

  const [select, setSelect] = useState(0);

  const renderItemData = ({item}) => (
    <TouchableOpacity style={styles.Card}>
      <Image style={styles.Photos} source={item.Image} />
      <TouchableOpacity style={styles.HeartBox} onPress={() => setSelect(true)}>
        <Entypo
          style={styles.HeartIcon}
          name={select ? 'heart' : 'heart-outlined'}
          size={20}
          color={select ? colors.red : colors.extraLight}
        />
      </TouchableOpacity>
      <View style={styles.CardFooter}>
        <Text style={styles.Prices}>{item.title}</Text>
        <Text style={styles.Details}>{item.Text}</Text>
        <Text style={styles.Address}>{item.Add}</Text>
        <View style={{flexDirection: 'row', marginTop: normalize(30)}}>
          <Text style={styles.Date}>Sarthana</Text>
          <Text style={[styles.Date,{marginLeft: normalize(50)}]}>25 January</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View>
        <View style={{flexDirection: 'row', marginHorizontal: normalize(5)}}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            style={styles.LeftIcon}
            color={colors.appBlue}
            onPress={() => navigation.goBack()}
          />
          <MaterialCommunityIcons
            name="swap-vertical"
            size={30}
            style={styles.Icon}
          />
          <MaterialCommunityIcons name="tune" size={30} style={styles.Icon} />
        </View>
        {/* <View style={{borderWidth: normalize(1)}} /> */}
        <View style={styles.SearchInput}>
          <Ionicons name="search" size={30} style={styles.Icon} />
          <TextInput
            style={styles.TextInput}
            placeholder="Cars in Surat 395006, GJ"
            placeholderTextColor={'gray'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: normalize(10),
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={select === 0 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(0)}>
            <Text style={styles.SelectionText}>Budget</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 1 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(1)}>
            <Text style={styles.SelectionText}>Brand & Model</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 2 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(2)}>
            <Text style={styles.SelectionText}>Year</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 3 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(3)}>
            <Text style={styles.SelectionText}>Fuel</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <View>
          <FlatList
            data={ItemData}
            renderItem={renderItemData}
            keyExtractor={item => item.value}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cars;

const styles = StyleSheet.create({
  LeftIcon: {
    alignSelf: 'center',
    flex: 1,
  },
  Icon: {
    marginHorizontal: normalize(5),
  },
  SearchInput: {
    flexDirection: 'row',
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    margin: normalize(10),
  },
  Box: {
    borderWidth: normalize(1),
    borderRadius: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
  },
  BoxGreen: {
    borderWidth: normalize(1),
    borderRadius: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  SelectionText: {
    fontSize: normalize(16),
    fontWeight: '600',
    padding: normalize(8),
    marginHorizontal: normalize(5),
    color: colors.extraLight,
  },
  Card: {
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    flex: 1,
    margin: normalize(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  Photos: {
    height: normalize(150),
    width: normalize(130),
    resizeMode: 'cover',
    // "center","contain","cover","repeat","stretch"
  },
  HeartBox: {
    position: 'absolute',
    left: normalize(100),
    top: normalize(5),
    backgroundColor: colors.blackTransparent,
    borderRadius: normalize(30),
  },
  HeartIcon: {
    margin: normalize(3),
  },
  CardFooter: {
    marginVertical: normalize(10),
    marginLeft: normalize(20),
  },
  Prices: {
    fontSize: normalize(20),
    color: '#008080',
    fontWeight: 'bold',
  },
  Details: {
    fontSize: 18,
    color: colors.black,
    marginVertical: normalize(5),
  },
  Address: {
    fontSize: 16,
    color: '#616161',
  },
  Date: {
    fontSize: normalize(16),
  }
});
