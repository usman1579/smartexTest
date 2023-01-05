import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import FloatingButton from './components/FloatingButton';
import List from './components/List';

const data = {
  title: '',
  description: '',
  date: new Date(),
  check: false,
  id: null,
};

const Main = props => {
  return (
    <View style={styles.container}>
      <Header
        title={'Lista de tarefas'}
        onPress={() => props.navigation.toggleDrawer()}
      />

      <FloatingButton
        onPress={() => props.navigation.navigate('Detail', {item: data , screen :'Add Item'})}
      />

      <List {...props} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
