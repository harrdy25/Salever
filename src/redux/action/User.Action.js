import {Alert} from 'react-native';
import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';
import auth from '@react-native-firebase/auth';

// export const SignUpUser = (data) => dispatch => {
//   try {
//     fetch(BASE_URL + 'users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// };

export const SignUpUser = (email, password) => dispatch => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
};

// export const clickLogin = (loginData, navigation) => dispatch => {
//   let flag = 0,
//     id = 0;
//   fetch(BASE_URL + 'users', {
//     method: 'GET',
//   })
//     .then(response => response.json())
//     .then(result => {
//       result.map(item => {
//         if (
//           item.email == loginData.email &&
//           item.password == loginData.password
//         ) {
//           (flag = 1), (id = item.id);
//         }
//         if (flag === 1) {
//           dispatch({type: ActionType.SIGNIN_SUCCESS, payload: id});
//           navigation.navigate('Home');
//         } else {
//           dispatch({
//             type: ActionType.SIGNIN_ERROR,
//             payload: 'Wrong Email/Password',
//           });
//         }
//       });
//     });
// };

export const clickLogin = (email, password, navigation) => dispatch => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Your Account is sucsses fully login!');
      navigation.navigate('Home');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

      if (error.code === 'auth/invalid-password') {
        alert('That email address is invalid!');
      }
      console.error(error);
    });
};
