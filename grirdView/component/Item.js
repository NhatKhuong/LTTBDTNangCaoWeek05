import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Item = () => {
  return (
    <View style={{flex:0.4, margin:20, marginLeft:0}}>
      <Image style={{width:150, height:70}} source={require('../imgs/giacchuyen1.png')} />
      <Text>Cáp chuyển từ Cổng USB sang PS2...</Text>
      <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Image source={require('../imgs/Star1.png')} />
        <Image source={require('../imgs/Star1.png')} />
        <Image source={require('../imgs/Star1.png')} />
        <Image source={require('../imgs/Star1.png')} />
        <Image source={require('../imgs/Star1.png')} />
        <Text>(15)</Text>
      </View>
      <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:14}}>69.900 đ</Text>
        <Text style={{marginLeft:10, color:"#ccc"}}>-39%</Text>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})