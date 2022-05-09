import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {normalize} from '../utils';
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

const CategoriesModal = ({visible, onClose}) => {
  const [screen, setScreen] = useState(0);
  const [line, setLine] = useState(1);

  const renderData = ({item}) => (
    <View>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image style={styles.Icon} source={item.image} />
        <Text style={styles.Text}>{item.text}</Text>
        <Entypo name="chevron-right" size={30} style={styles.IconRight}/>
      </TouchableOpacity>
      <View style={{borderWidth: normalize(1), marginLeft: normalize(18)}} />
    </View>
  );

  return (
    <Modal animationType="none" visible={visible} onRequestClose={onClose}>
      <SafeAreaView>
        <View>
          <Entypo name="chevron-left" size={40} onPress={onClose} />
          <View style={{borderWidth: normalize(1)}} />
          <View>
            <FlatList
              data={Data}
              renderItem={renderData}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CategoriesModal;

const styles = StyleSheet.create({
  TitleName: {
    fontSize: normalize(22),
    fontWeight: '600',
    alignSelf: 'center',
    flex: 2,
  },
  Icon: {
    height: normalize(20),
    width: normalize(20),
    margin: normalize(10),
    alignSelf: 'center'
  },
  Text: {
    fontSize: normalize(18),
    flex: 1,
    marginLeft: normalize(10),
    alignSelf: 'center',
    fontWeight: '500'
  },
  IconRight:{
      alignSelf: 'center',
      marginRight: normalize(10)
  }
});
