import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const DateView = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.dateContainer, {flex: props.flex}]}>
    <Text>{props.Date}</Text>
    <Ionicons name="caret-down-outline" size={20} color={'grey'} />
  </TouchableOpacity>
);

export default DateView;

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
});
