import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Button } from "@react-native-material/core";

const Item = ({name,store,img}) => {
  return (
    <TouchableOpacity style={{display:"flex", borderTopWidth:1, borderBottomWidth:1,borderColor:"#ccc", flexDirection:"row",backgroundColor:"#fafafa",height:100,alignItems:"center", width:500,marginTop:10}}>
      <Image style={{width:60, height:60, marginLeft:20}} source={require('../imgs/ca_nau_lau.png')}/>
      <View style={{marginLeft:20, width:200}}>
        <Text>{name}</Text>
        <Text>{store}</Text>
      </View>
      <Button title="Chat" color="error" />
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({

})