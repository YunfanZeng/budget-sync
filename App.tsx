/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button, Text, StyleProp, ViewStyle } from 'react-native';
import Graph from './components/Graph';
import Header from './components/Header';
import TransactionList from './components/TransactionList';

function App(): React.JSX.Element {
  let onClick = () => console.log("Hello TypeScript");
  return (
    <View style={viewStyle}>
      <Header />
      <Graph />
      <TransactionList />
    </View>
    
  );
}

const viewStyle: StyleProp<ViewStyle> = {
  flexDirection: 'column',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 25,
  backgroundColor: 'white'
}

export default App;
