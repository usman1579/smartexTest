import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from './components/Header/Header';
import {FloatingButton} from './components/FloatingButton/FloatingButton';
import {List} from './components/List/List';

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
      {/* Header Component */}
      <Header
        title={'Lista de tarefas'}
        onPress={() => props.navigation.toggleDrawer()}
      />

      {/* Floating Button */}
      <FloatingButton
        onPress={() =>
          props.navigation.navigate('Detail', {item: data, screen: 'Add Item'})
        }
      />

      {/* List Item to show the items of the List */}
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
