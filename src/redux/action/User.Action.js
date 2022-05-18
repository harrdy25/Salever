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

export const clickLogin = (e) => {
    e.preventDefault();
    fetch (BASE_URL + 'users', {
       method: 'POST',
       body: JSON.stringify({
         email: email,
         password: password
      }),
  })
    .then((response) => response.json())
    .then((result) => {
      if(result.message === "SUCCESS"){
        alert("You are logged in.");
        this.goToMain();
       } else {
           alert("Please check your login information.");
       }
    });
  }