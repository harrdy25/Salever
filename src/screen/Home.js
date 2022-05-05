import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { normalize } from '../utils'

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Text}>Home</Text>
      <Button 
      title='Go To Setting...!!!'
      onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
Text: {
    fontSize: normalize(20)
}
});