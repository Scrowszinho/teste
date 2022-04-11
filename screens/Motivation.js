import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Motivation() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motivação</Text>
      <Text style={styles.text}>Nossa Motivação principal vem da necessidade de unificar os dados
      de forma integra e segura, para 
      <Text style={styles.bold}> melhorar, agilizar e maximizar </Text>a eficiência
      das consultas e fichas extraídas. Também <Text style={styles.bold}>evoluir e modernizar </Text>
      os sistemas atuais pré estabelecidos.</Text>
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
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'#00c6f7',
  },
  bold:{
    fontWeight: 'bold',
    color: '#00c6f7'
  },
  text:{
    color: 'white'
  }

});
