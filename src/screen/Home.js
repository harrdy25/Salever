import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utils';
import colors from '../theme/colors';
import {images} from '../assets/images';
import Entypo from 'react-native-vector-icons/Entypo';
import CategoriesModal from '../component/CategoriesModal';
import CategoriesData from '../component/CategoriesData';
import SellingItem from '../component/SellingItem';

const Home = ({navigation}) => {

  const Data = CategoriesData;
  const ItemData = SellingItem;

  const [select, setSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderData = ({item}) => (
    <TouchableOpacity style={styles.IconContainer}>
      <Image style={styles.Icon} source={item.image} />
      <Text style={styles.TitleText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const renderItemData = ({item}) => (
    <TouchableOpacity style={styles.Card}>
      <Image style={styles.Photos} source={item.Image} />
      <TouchableOpacity style={styles.HeartBox} onPress={() => setSelect(true)}>
        <Entypo
          style={styles.HeartIcon}
          name={select ? 'heart' : 'heart-outlined'}
          size={30}
          color={select ? colors.red : colors.extraLight}
        />
      </TouchableOpacity>
      <View style={styles.CardFooter}>
        <Text style={styles.Prices}>{item.title}</Text>
        <Text style={styles.Details}>{item.Text}</Text>
        <Text style={styles.Address}>{item.Add}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginHorizontal: normalize(5)}}
          onPress={() => navigation.navigate('Login')}>
          <Entypo style={styles.Image} name="location-pin" size={30} />
          <Text style={styles.LocationText}>Surat 395006...</Text>
          <Entypo style={styles.DownImage} name="chevron-down" size={30} />
        </TouchableOpacity>
        <View style={styles.SearchInput}>
          <Image style={styles.Image} source={images.IMG_Search_Png} />
          <TextInput
            style={styles.TextInput}
            placeholder="Find Cars, Mobile Phones and mpre..."
            placeholderTextColor={'gray'}
            flex={1}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Entypo name="bell" size={30} style={styles.Image} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <>
            <View
              style={{flexDirection: 'row', marginHorizontal: normalize(10)}}>
              <Text style={styles.BrowseText}>Browse Categories</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.SeeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={Data}
                renderItem={renderData}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
            <View style={{marginHorizontal: normalize(10)}}>
              <Text style={styles.FreshText}>Fresh Recommendations</Text>
            </View>
            <View>
              <FlatList
                data={ItemData}
                renderItem={renderItemData}
                keyExtractor={item => item.value}
                numColumns={2}
              />
            </View>
          </>
        </ScrollView>
        <CategoriesModal
          animationIn="slideInLeft"
          transparent={true}
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  LocationText: {
    fontSize: normalize(18),
    alignSelf: 'center',
    marginHorizontal: normalize(10),
  },
  Image: {
    height: normalize(30),
    width: normalize(30),
    alignSelf: 'center',
    margin: normalize(5),
  },
  DownImage: {
    height: normalize(25),
    width: normalize(25),
    alignSelf: 'center',
    margin: normalize(5),
  },
  SearchInput: {
    flexDirection: 'row',
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    margin: normalize(10),
  },
  BrowseText: {
    fontSize: normalize(18),
    fontWeight: '500',
    flex: 1,
  },
  SeeAll: {
    fontWeight: '700',
    fontSize: normalize(20),
  },
  IconContainer: {
    margin: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    height: normalize(75),
    width: normalize(75),
    alignSelf: 'center',
  },
  TitleText: {
    fontSize: normalize(18),
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
    width: normalize(110),
    height: normalize(50),
    alignSelf: 'center',
  },
  FreshText: {
    fontSize: normalize(18),
    fontWeight: '500',
    marginVertical: normalize(10),
  },
  Card: {
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    alignItems: 'center',
    flex: 1,
    margin: normalize(5),
  },
  Photos: {
    height: normalize(180),
    width: normalize(150),
    resizeMode: 'cover',
    // "center","contain","cover","repeat","stretch"
  },
  HeartBox: {
    position: 'absolute',
    right: normalize(5),
    top: normalize(10),
    backgroundColor: colors.blackTransparent,
    borderRadius: normalize(30),
  },
  HeartIcon: {
    margin: normalize(3),
  },
  CardFooter: {
    marginVertical: normalize(10),
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
});
