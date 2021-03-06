import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utils';
import {images} from '../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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

const Chat = ({navigation}) => {
  const [select, setSelect] = useState(0);
  const [line, setLine] = useState(1);
  const [screen, setScreen] = useState(0);

  const renderChat = ({item}) => (
    <>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View>
          <Image style={styles.ImageChat} source={item.image} />
          <Image style={styles.Avatar} source={images.IMG_AVATAR_PNG} />
          <Entypo name='dot-single' size={50} color={'gray'} style={styles.OnlineDot}/>
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
          <Ionicons name="ellipsis-vertical" size={25} color={"#616161"} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={{borderWidth: normalize(1), marginLeft: normalize(80), borderColor: '#616161'}} />
    </>
  );
  return (
    <SafeAreaView style={{flex: 1,}}>
      <View>
        <Text
          style={{
            fontSize: normalize(22),
            fontWeight: '600',
            textAlign: 'center',
            color: '#616161'
          }}>
          Messages
        </Text>
        <View
          style={{borderWidth: normalize(1), marginTop: normalize(5),borderColor: '#616161'}}
        />

        <View style={{flexDirection: 'row', marginHorizontal: normalize(16), padding: normalize(10)}}>
          <Text style={styles.EditText}>Edit</Text>
          <Text style={styles.InboxText}>Inbox</Text>
          <Text style={styles.SearchText}>Search</Text>
        </View>
        <View style={{borderWidth: normalize(1), borderColor: '#616161'}} />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: normalize(10),
          }}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLine(1);
              setScreen(0);
            }}>
            <Text style={styles.AllText}>All</Text>
            {line === 1 && (
              <View
                style={{
                  borderWidth: normalize(3),
                  flex: 1,
                  borderColor: 'green',
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLine(2);
              setScreen(0);
            }}>
            <Text style={styles.AllText}>Buying</Text>
            {line === 2 && (
              <View
                style={{
                  borderWidth: normalize(3),
                  flex: 1,
                  borderColor: 'green',
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLine(3);
              setScreen(1);
            }}>
            <Text style={styles.AllText}>Selling</Text>
            {line === 3 && (
              <View
                style={{
                  borderWidth: normalize(3),
                  flex: 1,
                  borderColor: 'green',
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: normalize(1), borderColor: '#616161'}} />

        {screen === 0 && (
          <>
            <Text style={styles.QuickText}>QUICK FILTERS</Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: normalize(16),
                justifyContent: 'space-around',
                marginVertical: normalize(5)
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
            {/* <ScrollView> */}
              <View style={{marginHorizontal: normalize(8)}}>
                <FlatList
                  data={ChatData}
                  renderItem={renderChat}
                  keyExtractor={item => item.id}
                  // scrollEnabled={false}
                />
              </View>
            {/* </ScrollView> */}
          </>
        )}
        {screen === 1 && (
          <>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.Kuku} source={images.IMG_KUKU_PNG} />
              <Text
                style={{
                  fontSize: normalize(20),
                  textAlign: 'center',
                  marginHorizontal: normalize(15),
                  fontWeight: '600',
                  color: '#616161',
                  marginVertical: normalize(20),
                }}>
                You have got no messages so far!
              </Text>
              <Text
                style={{
                  fontSize: normalize(18),
                  textAlign: 'center',
                  color: '#616161',
                  marginHorizontal: normalize(16),
                }}>
                An soon as someone sends you a message. it'll start appearing
                here.
              </Text>
            </View>
            <TouchableOpacity style={styles.SellingBox}>
              <Text style={styles.Selling}>Start Selling</Text>
            </TouchableOpacity>
          </>
        )}
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
    color: '#616161',
    flex: 1,
  },
  InboxText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
    color: '#616161',

  },
  SearchText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'right',
    flex: 1,
    color: '#616161',

  },
  AllText: {
    fontSize: normalize(20),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'left',
    color: '#616161',
    marginVertical: normalize(14),
  },
  QuickText: {
    fontSize: normalize(18),
    fontWeight: '600',
    margin: normalize(16),
    color: '#616161'
  },
  Box: {
    // borderWidth: normalize(1),
    borderRadius: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
  },
  BoxGreen: {
    // borderWidth: normalize(1),
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
    height: normalize(60),
    width: normalize(60),
    borderRadius: normalize(10),
    margin: normalize(10),
  },
  Avatar: {
    height: normalize(30),
    width: normalize(30),
    borderRadius: normalize(20),
    borderWidth: normalize(2),
    position: 'absolute',
    bottom: 5,right: 5
  },
  OnlineDot:{    
    position: 'absolute',
    right: 10,
    bottom: -15,
  },
  TitleName: {
    fontSize: normalize(18),
    fontWeight: '600',
    flex: 1,
    alignSelf: 'center',
    color: '#616161'
  },
  TimeText: {
    fontSize: normalize(14),
    alignSelf: 'center',
    marginRight: normalize(20),
    color: '#616161'
  },
  DetailsText: {
    fontSize: normalize(14),
    fontWeight: '500',
    color: '#616161'
  },
  Message: {
    fontSize: normalize(14),
    marginVertical: normalize(5),
    color: '#616161'
  },
  Kuku: {
    height: normalize(300),
    width: normalize(300),
    marginTop: normalize(40),
  },
  SellingBox: {
    backgroundColor: 'green',
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginVertical: normalize(20),
  },
  Selling: {
    fontSize: normalize(20),
    fontWeight: '600',
    padding: normalize(8),
    textAlign: 'center',
  },
});
