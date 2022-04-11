import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Motivation from './screens/Motivation';
import About from './screens/About';
import Home from './screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
    const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PsycoSpace</Text>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            color:'white',
            backgroundColor: '#212121'
          },
            headerShown: false
        }}
        >
          <Tab.Screen name="Home" 
          component={Home} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          ),
        }}
          />
          <Tab.Screen name="Motivation"
           component={Motivation} 
           options={{
          tabBarLabel: 'Motivação',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="run-fast" color={color} size={size}/>
          ),
        }}
           />
          <Tab.Screen name="About" 
          component={About} 
          options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help-circle" color={color} size={size}/>
          ),
        }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#00c6f7',
    fontWeight: 'bold',
    padding:5
  },
  container:{
    display: 'flex',
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#212121'
  }

});