import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utils';
import {images} from '../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';

const ChatData = [
  {
    id: 1,
    image: images.IMG_Iphone111_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 11 pro 256gb warranty over',
    time: '11:57',
    msg: 'Yes its available',
  },
  {
    id: 2,
    image: images.IMG_Iphone12MAX_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 12 pro max',
    time: '11:10',
    msg: 'Yes its available',
  },
  {
    id: 3,
    image: images.IMG_Iphone13PRO_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 13 pro 256gb',
    time: '10:05',
    msg: 'Yes its available',
  },
  {
    id: 4,
    image: images.IMG_IphoneX_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone X 64gb BH 91%',
    time: '08:45',
    msg: 'Yes its available',
  },
  {
    id: 5,
    image: images.IMG_Iphone11PRO_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 11 pro BH 90%',
    time: '02:12',
    msg: 'Yes its available',
  },
  {
    id: 6,
    image: images.IMG_IphoneXS_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone XS 128gb',
    time: '11:10',
    msg: 'Yes its available',
  },
  {
    id: 7,
    image: images.IMG_Iphone13MAX_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 13 pro max 256gb',
    time: '11:19',
    msg: 'Yes its available',
  },
  {
    id: 8,
    image: images.IMG_Iphone11MAX_Png,
    title: 'Hardik Kukadiya',
    text: 'Iphone 11 pro max',
    time: '08:30',
    msg: 'Yes its available',
  },
];

const Chat = () => {
  const [select, setSelect] = useState(0);
  const [line, setLine] = useState(0);

  const renderChat = ({item}) => (
    <>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.ImageChat} source={item.image} />
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TitleName}>{item.title}</Text>
            <Text style={styles.TimeText}>{item.time}</Text>
          </View>
          <View>
            <Text style={styles.DetailsText}>{item.text}</Text>
            <Text style={styles.Message}>{item.msg}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center', marginRight: normalize(10)}}>
          <Ionicons name="ellipsis-vertical" size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={{borderWidth: normalize(1), marginLeft: normalize(80)}} />
    </>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row', marginHorizontal: normalize(10)}}>
          <Text style={styles.EditText}>Edit</Text>
          <Text style={styles.InboxText}>Inbox</Text>
          <Text style={styles.SearchText}>Search</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: normalize(10),
            justifyContent: 'space-around',
          }}>
          <Text style={styles.AllText}>All</Text>
          <Text style={styles.BuyingText}>Buying</Text>
          <Text style={styles.SellingText}>Selling</Text>
        </View>
        <View style={{borderWidth: normalize(1)}} />
        <Text style={styles.QuickText}>QUICK FILTERS</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: normalize(10),
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={select === 0 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(0)}>
            <Text style={styles.SelectionText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 1 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(1)}>
            <Text style={styles.SelectionText}>Meetings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 2 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(2)}>
            <Text style={styles.SelectionText}>Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={select === 3 ? styles.BoxGreen : styles.Box}
            onPress={() => setSelect(3)}>
            <Text style={styles.SelectionText}>Important</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={ChatData}
            renderItem={renderChat}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  EditText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 1,
  },
  InboxText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
  },
  SearchText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
    flex: 1,
  },
  AllText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'left',
  },
  BuyingText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
  },
  SellingText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
  },
  QuickText: {
    fontSize: normalize(18),
    fontWeight: '600',
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
  ImageChat: {
    height: normalize(70),
    width: normalize(70),
    borderRadius: normalize(10),
    margin: normalize(10),
  },
  TitleName: {
    fontSize: normalize(18),
    fontWeight: '600',
    flex: 1,
    alignSelf: 'center',
  },
  TimeText: {
    fontSize: normalize(14),
    alignSelf: 'center',
    marginRight: normalize(20),
  },
  DetailsText: {
    fontSize: normalize(14),
    fontWeight: '500',
  },
  Message: {
    fontSize: normalize(14),
    marginVertical: normalize(5),
  },
});
