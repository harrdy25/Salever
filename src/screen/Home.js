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
} from 'react-native';
import React from 'react';
import {normalize} from '../utils';
import colors from '../theme/colors';
import {images} from '../assets/images';

const Data = [
  {id: 1, image: images.IMG_Cars_Png, text: 'OLX Autos(Cars)'},
  {id: 2, image: images.IMG_Home_Png, text: 'Properties'},
  {id: 3, image: images.IMG_Mobile_Png, text: 'Mobiles'},
  {id: 4, image: images.IMG_Jobs_Png, text: 'Jobs'},
  {id: 5, image: images.IMG_Biks_Png, text: 'Bikes'},
  {id: 6, image: images.IMG_Electronics_Png, text: 'Electronics & Appliances'},
  {id: 7, image: images.IMG_Vehicles_Png, text: 'Commercial Vehicles & Spares'},
  {id: 8, image: images.IMG_Furniture_Png, text: 'Furniture'},
  {id: 9, image: images.IMG_Fashion_Png, text: 'Fashion'},
  {id: 10, image: images.IMG_BookSports_Png, text: 'Books, Sports, hobbies'},
  {id: 11, image: images.IMG_Pets_Png, text: 'Pets'},
  {id: 12, image: images.IMG_Services_Png, text: 'Services'},
];

const ItemData = [
  { value: 1, Image: images.IMG_Iphone8_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
  { value: 2, Image: images.IMG_IphoneXR_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
  { value: 3, Image: images.IMG_IphoneXS_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
  { value: 4, Image: images.IMG_Iphone11_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
  { value: 5, Image: images.IMG_Iphone111_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
  { value: 6, Image: images.IMG_Iphone11PRO_Png,  title: '₹ 14,000', Text: 'Iphone X 64gb', Add: 'Subhash Nagar', icon: images.IMG_Heart_Png, },
];

const Home = ({navigation}) => {
  const renderData = ({item}) => (
    <View style={styles.IconContainer}>
      <Image style={styles.Icon} source={item.image} />
      <Text style={styles.TitleText}>{item.text}</Text>
    </View>
  );

  const renderItemData = ({item}) => (
    <View style={{margin: normalize(5)}}>   
      <View style={styles.Card}>
        <Image style={styles.Photos} source={item.Image} />
        <Image style={styles.HeartIcon} source={item.icon} />
        <View style={styles.cardFooter}>
          <Text style={styles.Prices}>{item.title}</Text>
          <Text style={styles.position}>{item.Text}</Text>
          <Text style={styles.position}>{item.Add}</Text>
        </View>
      </View>   
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row', marginHorizontal: normalize(5)}}>
          <Image style={styles.Image} source={images.IMG_Location_Png} />
          <Text style={styles.LocationText}>Surat 395006...</Text>
          <Image style={styles.Image} source={images.IMG_Down_Png} />
        </View>
        <View style={styles.SearchInput}>
          <Image style={styles.Image} source={images.IMG_Search_Png} />
          <TextInput
            style={styles.TextInput}
            placeholder="Find Cars, Mobile Phones and mpre..."
            placeholderTextColor={'gray'}
            flex={1}
          />
          <Image style={styles.Image} source={images.IMG_Bell_Png} />
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: normalize(10)}}>
          <Text style={styles.BrowseText}>Browse Categories</Text>
          <TouchableOpacity>
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
      </View>
      <View style={{marginHorizontal: normalize(10)}}>
        <Text style={styles.FreshText}>Fresh Recommendations</Text>
      </View>
      <View>
        <FlatList
          data={ItemData}
          renderItem={renderItemData}
          keyExtractor={item => item.id}
          numColumns={2}
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
  },
  Card: {
    borderRadius: normalize(8),
    borderWidth: normalize(1),
  },
  Photos: {
    height: normalize(180),
    width: normalize(150),
    marginHorizontal: normalize(10),
    backgroundColor: colors.gray
  },
  HeartIcon: {
    height: 25,
    width: 25,
    backgroundColor: colors.blackTransparent,
    borderRadius: normalize(10),
    position: 'absolute',
    right: normalize(8),
    top: normalize(10)
  },
  Prices: {
    fontSize: 20,
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 18,
    color: '#696969',
  },
});
