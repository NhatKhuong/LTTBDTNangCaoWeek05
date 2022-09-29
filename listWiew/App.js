import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Item from './common/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{padding:5,width:"100%", height:50, backgroundColor:"blue",display:"flex", flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={{color:"#fff", fontSize:16}}>Chat</Text>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
      <View style={{height:80, width:"100%", backgroundColor:"#ccc",display:"flex",justifyContent:"center", alignContent:"center", padding:20}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <ScrollView>
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
          <Item 
            name='Nồi cơm điện'
            store='Của hàng NPK'
            img="require('../imgs/ca_nau_lau.png')"
          />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
