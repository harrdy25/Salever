import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
} from '../redux/action/Counter.Action';
import { productSaga } from '../redux/sagas/products.Saga';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const one = () => {
    return 'Hardik';
  };
  const two = () => {
      return new Promise((resolve, reject) => {

          setTimeout(() => {
            resolve('Vallabhbhai');
          }, 2000);
      })
  };
  const three = () => {
    return 'Kukadiya';
  };

  const all = async () => {
    let fname = one();
    console.log(fname);
    let sname = await two();
    console.log(sname);
    let tname = three();
    console.log(tname);
  };

  useEffect(() => {
    all();
  }, []);


  const display = (z) => {
      console.log(z);
  }

  const sum = (callbackfun) => {
      let x = 10, y = 20, z;
      z = x + y;
      callbackfun(z)
  }

  sum(display);

  return (
    <View style={{marginTop: 50}}>
      <TouchableOpacity onPress={() => handleIncrement()}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{count.count}</Text>

      <TouchableOpacity onPress={() => handleDecrement()}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
}
