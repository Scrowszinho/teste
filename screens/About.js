import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Image
          style={styles.logo}
          source={require('../assets/psicologia.png')}
        />
        Sobre
      </Text>
      <Text style={styles.text}>
        O sistema <Text style={styles.bold}>PsycoSpace</Text> tem como objetivo automatizar a anotação e
        organização do psicólogo durante suas sessões com o paciente, excluindo
        a chance de perda de dados em caso de acidentes físicos e materiais com
        os dados de cada cliente, favorecendo também a agilidade durante suas
        pontuações, ganhando mais tempo para desenvolver o seu trabalho diário
        com indivíduo.
      </Text>
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00c6f7',
  },
  bold: {
    fontWeight: 'bold',
    color: '#00c6f7',
  },
  text: {
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
