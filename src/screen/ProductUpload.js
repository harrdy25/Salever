import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {ProductData} from '../redux/action/Product.Action';
import {normalize} from '../utils/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductUpload = ({navigation}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');

  const handleClick = () => {
    let proData = {
      title,
      info,
      price,
      area,
    };
    dispatch(ProductData(proData));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="chevron-left"
            size={35}
            style={styles.MenuIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>Product</Text>
        </View>
        <View style={{borderWidth: 1}} />
        <Text style={styles.Fashion}>Ad title*</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Title name...."
            placeholderTextColor={'gray'}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <Text style={styles.Fashion}>Additional information*</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Add Descriptions"
            placeholderTextColor={'gray'}
            onChangeText={text => setInfo(text)}
          />
        </View>
        <Text style={styles.Fashion}>Upload Images*</Text>
        <TouchableOpacity
          style={{
            marginLeft: normalize(16),
          }}>
          <Ionicons name="md-camera-outline" size={100} />
        </TouchableOpacity>
        <Text style={styles.Fashion}>₹ Price*</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="₹ 00.0"
            placeholderTextColor={'gray'}
            keyboardType="number-pad"
            onChangeText={text => setPrice(text)}
          />
        </View>
        <Text style={styles.Fashion}>Area*</Text>
        <View style={styles.NameBox}>
          <TextInput
            style={styles.Name}
            placeholder="Address"
            placeholderTextColor={'gray'}
            onChangeText={text => setArea(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.SubmitBox}
          onPress={() => handleClick()}>
          <Text style={styles.Submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductUpload;

const styles = StyleSheet.create({
  MenuIcon: {
    margin: normalize(8),
  },
  Title: {
    fontSize: normalize(22),
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    marginRight: normalize(60),
  },
  Fashion: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginLeft: normalize(16),
    marginVertical: normalize(10),
  },
  NameBox: {
    borderColor: 'gray',
    borderRadius: normalize(8),
    borderWidth: normalize(2),
    marginHorizontal: normalize(16),
    marginVertical: normalize(5),
  },
  Name: {
    fontSize: normalize(18),
    padding: normalize(8),
    fontWeight: '600',
  },
  SubmitBox: {
    borderRadius: normalize(8),
    marginHorizontal: normalize(16),
    marginVertical: normalize(5),
    backgroundColor: 'green',
    marginTop: normalize(40),
  },
  Submit: {
    fontSize: normalize(22),
    padding: normalize(10),
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
});
