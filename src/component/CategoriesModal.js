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
import CategoriesData from './CategoriesData';


const CategoriesModal = ({visible, onClose}) => {
  const Data = CategoriesData;

  const renderData = ({item}) => (
    <View>
      <TouchableOpacity style={{flexDirection: 'row', margin: normalize(5)}}>
        <Image style={styles.Icon} source={item.image} />
        <Text style={styles.Text}>{item.text}</Text>
        <Entypo name="chevron-right" size={30} style={styles.IconRight} />
      </TouchableOpacity>
      <View style={{borderWidth: normalize(1), marginLeft: normalize(18)}} />
    </View>
  );

  return (
    <Modal animationType="none" visible={visible} onRequestClose={onClose}>
      <SafeAreaView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="chevron-left" size={40} onPress={onClose} />
            <Text style={styles.Title}>Choose a category</Text>
          </View>
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
  Title: {
    fontSize: normalize(22),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    marginRight: normalize(32)
  },
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
    alignSelf: 'center',
  },
  Text: {
    fontSize: normalize(18),
    flex: 1,
    marginLeft: normalize(10),
    alignSelf: 'center',
    fontWeight: '500',
  },
  IconRight: {
    alignSelf: 'center',
    marginRight: normalize(10),
  },
});
