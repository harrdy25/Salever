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
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesModal from '../component/CategoriesModal';
import CategoriesData from '../component/CategoriesData';
import SellingItem from '../component/SellingItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
} from '../redux/action/Counter.Action';

const Home = ({navigation}) => {
  // const dispatch = useDispatch();
  // const count = useSelector(state => state.counter)

  // const handleIncrement = () => {
  //   dispatch(incrementCounter());
  // }

  // const handleDecrement = () => {
  //   dispatch(decrementCounter())
  // }

  const Data = CategoriesData;
  const ItemData = SellingItem;

  const [select, setSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // const [search, setSearch] = useState('');
  // const [newSearch, setNewSearch] = useState([]);

  // const SearchData = text => {
  //   if (text) {
  //     const newData = ItemData.filter(function (item) {
  //       const itemData = item.Text ? item.Text.toUpperCase() : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setNewSearch(newData);
  //     setSearch(text);
  //   } else {
  //     setNewSearch(ItemData);
  //     setSearch(text);
  //   }
  // };

  const onclick_item = text => {
    switch (text) {
      case 'OLX Autos(Cars)':
        navigation.navigate('Cars');
        break;
      case 'Properties':
        navigation.navigate('Properties');
        break;
      case 'Mobiles':
        navigation.navigate('Mobiles');
        break;
      case 'Jobs':
        navigation.navigate('Jobs');
        break;
      case 'Bikes':
        navigation.navigate('Bikes');
        break;
      case 'Electronics & Appliances':
        navigation.navigate('ElectronicsAndAppliances');
        break;
      case 'Commercial Vehicles & Spares':
        navigation.navigate('CommercialVehiclesAndSpares');
        break;
      case 'Furniture':
        navigation.navigate('Furniture');
        break;
      case 'Fashion':
        navigation.navigate('Fashion');
        break;
      case 'Books, Sports, hobbies':
        navigation.navigate('BooksSportsAndHpbbies');
        break;
      case 'Pets':
        navigation.navigate('Pets');
        break;
      case 'Services':
        navigation.navigate('Services');
        break;
      default:
    }
  };

  const onClick = index => {
    switch (index) {
      case 0:
        navigation.navigate('Details');
        break;
      default:
    }
  };
  const renderData = ({item}) => (
    <TouchableOpacity
      style={styles.IconContainer}
      onPress={() => onclick_item(item.text)}>
      <Image style={styles.Icon} source={item.image} />
      <Text style={styles.TitleText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const renderItemData = ({item, index}) => (
    <TouchableOpacity style={styles.Card} onPress={() => onClick(index)}>
      <Image style={styles.Photos} source={item.Image} />
      <TouchableOpacity style={styles.HeartBox} onPress={() => setSelect(!select)}>
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
        <Entypo
          name="menu"
          size={35}
          color={colors.gray}
          style={styles.MenuIcon}
          onPress={() => navigation.openDrawer()}
        />
        <View style={{borderWidth: normalize(1)}} />
        <TouchableOpacity
          style={{flexDirection: 'row', marginHorizontal: normalize(10)}}
          onPress={() => navigation.navigate('Login')}>
          <Entypo
            style={styles.Image}
            name="location-pin"
            size={30}
            color={colors.gray}
          />
          <Text style={styles.LocationText}>Surat 395006...</Text>
          <Entypo
            style={styles.DownImage}
            name="chevron-down"
            size={30}
            color={colors.gray}
          />
        </TouchableOpacity>
        <View style={styles.SearchInput}>
          <Ionicons
            style={styles.Image}
            name="search"
            size={30}
            color={colors.gray}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Find Cars, Mobile Phones and mpre..."
            placeholderTextColor={'gray'}
            flex={1}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Entypo
              name="bell"
              size={30}
              style={styles.Image}
              color={colors.gray}
            />
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
            <View style={{marginHorizontal: normalize(16)}}>
              <Text style={styles.FreshText}>Fresh Recommendations</Text>
            </View>
            <View style={{marginHorizontal: normalize(8)}}>
              <FlatList
                data={ItemData}
                renderItem={renderItemData}
                keyExtractor={item => item.value}
                numColumns={2}
                scrollEnabled={false}
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
  MenuIcon: {
    marginLeft: normalize(16),
    marginVertical: normalize(10),
  },
  LocationText: {
    fontSize: normalize(18),
    alignSelf: 'center',
    marginHorizontal: normalize(10),
    color: colors.gray,
  },
  Image: {
    margin: normalize(5),
  },
  DownImage: {
    height: normalize(25),
    width: normalize(25),
    alignSelf: 'center',
    margin: normalize(5),
  },
  TextInput: {
    color: colors.gray,
    fontSize: normalize(20),
    fontWeight: '600',
  },
  SearchInput: {
    flexDirection: 'row',
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    marginHorizontal: normalize(16),
    marginVertical: normalize(10),
    borderColor: colors.gray,
  },
  BrowseText: {
    fontSize: normalize(18),
    fontWeight: '500',
    flex: 1,
    marginLeft: normalize(8),
    color: colors.gray,
  },
  SeeAll: {
    fontWeight: '700',
    fontSize: normalize(20),
    marginRight: normalize(8),
    color: colors.gray,
  },
  IconContainer: {
    margin: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    height: normalize(50),
    width: normalize(50),
    alignSelf: 'center',
  },
  TitleText: {
    fontSize: normalize(16),
    fontWeight: '600',
    textAlign: 'center',
    width: normalize(110),
    height: normalize(50),
    color: colors.gray,
    marginVertical: normalize(8),
  },
  FreshText: {
    fontSize: normalize(18),
    fontWeight: '500',
    marginVertical: normalize(10),
    color: colors.gray,
  },
  Card: {
    backgroundColor: colors.extraLight,
    borderRadius: normalize(8),
    alignItems: 'center',
    flex: 1,
    marginHorizontal: normalize(8),
    marginVertical: normalize(8),
    shadowOffset: {
      width: 0.0,
      height: 0.0,
    },
    shadowColor: 'gray',
    shadowOpacity: normalize(0.5),
    shadowRadius: normalize(1),
  },
  Photos: {
    height: normalize(150),
    width: normalize(140),
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
