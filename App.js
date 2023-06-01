import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from './src/Search/index';
import Climate from './src/Climate/index';
export default function App() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.menu}>
        <Tab.Navigator>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Climate" component={Climate} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});

