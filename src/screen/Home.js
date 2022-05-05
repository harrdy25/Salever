import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button 
      title='Go To Setting...!!!'
      onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})