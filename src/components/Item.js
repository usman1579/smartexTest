import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';

const Item = props => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.checkBox}>
        <CheckBox
          disabled={false}
          value={props.CheckBox}
          onValueChange={props.onValueChange}
        />
      </View>

      <TouchableOpacity
        onPress={props.onPressItem}
        style={{flex: 5, justifyContent: 'center'}}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.text1}>{props.description}</Text>
        <Text style={styles.text1}>{props.date}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  text1: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
  },
  checkBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
