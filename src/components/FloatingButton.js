import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const FloatingButton = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.floatingContainer}>
    {props.type == 'done' ? (
      <Ionicons
        name={'checkmark-outline'}
        color={'white'}
        size={hp('3%')}
      />
    ) : (
      <Ionicons name={'add'} color={'white'} size={hp('3%')} />
    )}
  </TouchableOpacity>
);

export default FloatingButton;

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    zIndex: 1000,
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: hp('4%'),
    backgroundColor: '#FF7043',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
