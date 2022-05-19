import { Alert } from 'react-native';
import {BASE_URL} from '../../Shared/BaseUrl';

export const SignUpUser = data => dispatch => {
  try {
    fetch(BASE_URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (e) {
    console.log(e);
  }
};

export const clickLogin = loginData => dispatch => {
  fetch(BASE_URL + 'users', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => {      
      result.map(d => {
        console.log("Data", result);

        console.log("Mail :-", d.email);

        return loginData.map(a => {
          console.log("LoginData1", loginData);

          if (d.email === a.email || d.password === a.password) {
            Alert.alert("Login successfully")
          }
        });
      });
    });
};
