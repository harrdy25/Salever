import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../utils/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  deleteProduct,
  fetchProduct,
  insertProduct,
  updateProduct,
} from '../redux/action/Product.Action';

const ProductUpload = ({navigation}) => {
  const product = useSelector(state => state.product);
  const dispacth = useDispatch();

  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [id, setId] = useState(0);
  const [button, setButton] = useState(0);

  const handleClick = () => {
    if (!(name == '' || info == '' || price == '' || area == '')) {
      let proData = {
        name,
        info,
        price,
        area,
      };
      dispacth(insertProduct(proData));
      setName('');
      setArea('');
      setInfo('');
      setPrice('');
    } else {
      alert('Fillup All Details...');
    }
  };

  useEffect(() => {
    dispacth(fetchProduct());
  }, []);

  const handleDelete = id => {
    dispacth(deleteProduct(id));
  };

  const updateData = () => {
    let pData = {
      id: id,
      name,
      info,
      price,
      area,
    };
    dispacth(updateProduct(pData));
    setName('');
    setInfo('');
    setArea('');
    setPrice('');
    setButton(0);
  };

  const productEdit = id => {
    let fData = product.product.filter(item => item.id === id);
    setName(fData[0].name);
    setInfo(fData[0].info);
    setArea(fData[0].area);
    setPrice(fData[0].price);
    setButton(1);
    setId(id);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.Box}>
        <View style={{margin: normalize(10)}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TitleName}>{item.name}</Text>
            <Text style={styles.Price}>₹ {item.price}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.Information}>{item.info}</Text>
              <Text style={styles.Area}>{item.area}</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Entypo
                  name="cross"
                  size={35}
                  color={'red'}
                  style={styles.Icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => productEdit(item.id)}>
                <Entypo
                  name="edit"
                  size={30}
                  color={'green'}
                  style={styles.Icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
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
        <ScrollView>
          <>
            <Text style={styles.Fashion}>Ad title*</Text>
            <View style={styles.NameBox}>
              <TextInput
                style={styles.Name}
                placeholder="Title name...."
                placeholderTextColor={'gray'}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <Text style={styles.Fashion}>Additional information*</Text>
            <View style={styles.NameBox}>
              <TextInput
                style={styles.Name}
                placeholder="Add Descriptions"
                placeholderTextColor={'gray'}
                value={info}
                onChangeText={text => setInfo(text)}
              />
            </View>
            <Text style={styles.Fashion}>₹ Price*</Text>
            <View style={styles.NameBox}>
              <TextInput
                style={styles.Name}
                placeholder="₹ 00.0"
                placeholderTextColor={'gray'}
                keyboardType="number-pad"
                value={price}
                onChangeText={text => setPrice(text)}
              />
            </View>
            <Text style={styles.Fashion}>Area*</Text>
            <View style={styles.NameBox}>
              <TextInput
                style={styles.Name}
                placeholder="Address"
                value={area}
                placeholderTextColor={'gray'}
                onChangeText={text => setArea(text)}
              />
            </View>
            {button ? (
              <TouchableOpacity
                style={styles.SubmitBox}
                onPress={() => updateData()}>
                <Text style={styles.Submit}>Update Submit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.SubmitBox}
                onPress={() => handleClick()}>
                <Text style={styles.Submit}>Submit</Text>
              </TouchableOpacity>
            )}
            <View>
              <FlatList
                data={product.product}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>
          </>
        </ScrollView>
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
  FashionRed: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginLeft: normalize(16),
    marginVertical: normalize(10),
    color: 'red',
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
    marginTop: normalize(10),
  },
  Submit: {
    fontSize: normalize(22),
    padding: normalize(10),
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  Box: {
    marginHorizontal: normalize(16),
    marginVertical: normalize(5),
    backgroundColor: '#bdbdbd',
    borderRadius: normalize(10),
  },
  TitleName: {
    fontSize: normalize(18),
    fontWeight: '600',
    flex: 1,
  },
  Price: {
    fontSize: normalize(20),
    fontWeight: '700',
    color: '#003d00',
  },
  Information: {
    fontSize: normalize(16),
    fontWeight: '600',
    marginVertical: normalize(5),
  },
  Area: {
    fontSize: normalize(14),
    fontWeight: '600',
  },
  Icon: {
    marginHorizontal: 10,
  },
});

{
  /* <Text style={styles.Fashion}>Upload Images*</Text>
        <TouchableOpacity
          style={{
            marginLeft: normalize(16),
          }}>
          <Ionicons name="md-camera-outline" size={100} />
        </TouchableOpacity> */
}
