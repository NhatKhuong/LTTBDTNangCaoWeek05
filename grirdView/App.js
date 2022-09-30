import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {  } from "@react-native-material/core";
import Item from './component/Item';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{padding:5,width:"100%", height:50, backgroundColor:"#5ed3e6",display:"flex", flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
        <AntDesign name="left" size={24} color="white" />
        <TextInput style={{width:270, height:35, backgroundColor:"#fff", placeholder:"Search",color:"#ccc",borderWidth:1,borderColor:"#ccc"}}/>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
      <ScrollView style={{height:"80%", maxHeight:"80%"}}>
        <View style={{paddingLeft:10,paddingRight:10,display:"flex",flexDirection:"row", justifyContent:"space-around",width:"95%", alignItems:"center", alignContent:"center"}}>
            <Item />
            <Item />
        </View>
        <View style={{paddingLeft:10,paddingRight:10,display:"flex",flexDirection:"row", justifyContent:"space-around",width:"95%", alignItems:"center", alignContent:"center"}}>
            <Item />
            <Item />
        </View>
        <View style={{paddingLeft:10,paddingRight:10,display:"flex",flexDirection:"row", justifyContent:"space-around",width:"95%", alignItems:"center", alignContent:"center"}}>
            <Item />
            <Item />
        </View>
        <View style={{paddingLeft:10,paddingRight:10,display:"flex",flexDirection:"row", justifyContent:"space-around",width:"95%", alignItems:"center", alignContent:"center"}}>
            <Item />
            <Item />
        </View>
        <View style={{paddingLeft:10,paddingRight:10,display:"flex",flexDirection:"row", justifyContent:"space-around",width:"95%", alignItems:"center", alignContent:"center"}}>
            <Item />
            <Item />
        </View>
        
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
