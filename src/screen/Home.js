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
  {
    value: 1,
    Image: images.IMG_Iphone8_Png,
    title: '₹ 14,000',
    Text: 'Iphone 8 plus 64gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 2,
    Image: images.IMG_IphoneXR_Png,
    title: '₹ 18,000',
    Text: 'Iphone XR 128gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 3,
    Image: images.IMG_IphoneXS_Png,
    title: '₹ 26,500',
    Text: 'Iphone XS 256gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 4,
    Image: images.IMG_Iphone11_Png,
    title: '₹ 34,500',
    Text: 'Iphone 11 128gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 5,
    Image: images.IMG_Iphone111_Png,
    title: '₹ 36,500',
    Text: 'Iphone 11 256gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 6,
    Image: images.IMG_Iphone11PRO_Png,
    title: '₹ 40,999',
    Text: 'Iphone 11 Pro 128gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 7,
    Image: images.IMG_Iphone11MAX_Png,
    title: '₹ 55,999',
    Text: 'Iphone11 pro max...',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 8,
    Image: images.IMG_Iphone13_Png,
    title: '₹ 64,000',
    Text: 'Iphone X 256gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 9,
    Image: images.IMG_Iphone13MAX_Png,
    title: '₹ 94,999',
    Text: 'Iphone 13 Pro Max...',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 10,
    Image: images.IMG_Iphone13PRO_Png,
    title: '₹ 84,999',
    Text: 'Iphone 13 Pro 256gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 11,
    Image: images.IMG_IphoneX_Png,
    title: '₹ 20,000',
    Text: 'Iphone X 64gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 12,
    Image: images.IMG_Iphone12PRO_Png,
    title: '₹ 59,000',
    Text: 'Iphone 12 pro 256...',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 13,
    Image: images.IMG_Iphone12_Png,
    title: '₹ 49,000',
    Text: 'Iphone 12 64gb',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
  {
    value: 14,
    Image: images.IMG_Iphone12MAX_Png,
    title: '₹ 70,000',
    Text: 'Iphone 12 pro max...',
    Add: 'Subhash Nagar',
    icon: images.IMG_Heart_Png,
  },
];

const Home = ({navigation}) => {
  const renderData = ({item}) => (
    <View style={styles.IconContainer}>
      <Image style={styles.Icon} source={item.image} />
      <Text style={styles.TitleText}>{item.text}</Text>
    </View>
  );

  const renderItemData = ({item}) => (
    <View style={styles.Card}>
      <View>
        <Image style={styles.Photos} source={item.Image} />
        <Image style={styles.HeartIcon} source={item.icon} />
        <View style={styles.CardFooter}>
          <Text style={styles.Prices}>{item.title}</Text>
          <Text style={styles.Details}>{item.Text}</Text>
          <Text style={styles.Address}>{item.Add}</Text>
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
          <Image style={styles.DownImage} source={images.IMG_Down_Png} />
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
        <ScrollView>
          <>
            <View
              style={{flexDirection: 'row', marginHorizontal: normalize(10)}}>
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
          </>
        </ScrollView>
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
  },
  HeartIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: normalize(5),
    top: normalize(10),
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
