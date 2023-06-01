import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Footer from '../Footer/index';
export default function App() {
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  function dados() {
    if (city) {
      navigation.navigate('Climate', {
        value: city,
      });
    }
    else{
      Alert.alert('Sorry :(','Enter your city');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Climate</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          placeholderTextColor="#aaa"
          onChangeText={setCity}
          value={city}
        />

        <TouchableOpacity style={styles.button} onPress={dados}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
