import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../assets/images'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Image source={images.IMG_OLX_Png}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})