import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image,ScrollView  } from 'react-native';

export default function Home() {
  const data = [{
    name: 'Luis Gustavo',
    yo: 21,
    details: 'Desenvolvedor Front-End Junior em goFLux, estudante de Analise e desenvolvimento de sistemas e técnico em informatica pela ETEC - GTÁ',
    img: 'assets/gustavo.jpg'
  },
  {
    name: 'Bruno Coelho',
    yo: 21,
    details: 'Desenvolvedor Front-End / Mobile, estudante de Analise e desenvolvimento de sistemas, em constante aprendizado.',
    img: './assets/gustavo.jpg'
  },
  {
    name: 'Ricardo Henrique',
    yo: 21,
    details: 'Desenvolvedor Front-End Junior em Confere Cartões, estudante de Analise e desenvolvimento de sistemas e técnico em informatica pelo CTMA - Coteca',
    img: './assets/gustavo.jpg'
  }];
  const renderItem = ({item}) => (
    <View style={styles.card}>
          <Text style={styles.nameRow}>{item.name} - {item.yo}</Text>
          <Text style={styles.detailsRow}>{item.details}</Text>
          <Image   
          style={styles.image}
          source={{
            require: item.img
          }}
          />
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121',
    padding: 8,
  },
  card:{
    borderColor: 'white',
    borderWidth: 1,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  },
  image:{
    width:100,
    height:100
  },
  nameRow:{
    color: '#00c6f7',
    fontSize: 25
  },
  detailsRow:{
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 15
  }

});
