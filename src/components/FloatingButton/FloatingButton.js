import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

// Floating Button Component
export const FloatingButton = ({
  onPress,
  type
}) => (
  //Floating Button used in 2 screen Main and Detail Screen type == 'done' 
  // type == 'done' check the the screen comes from previous screen and shows the check icon instead of Plus icon 
  // Plus icon for navigate to Detail screen  and  check icon for Edit  and Add new Item in the List
  <TouchableOpacity
    testID="floating-button"
    onPress={onPress}
    style={styles.floatingContainer}>
    {type == 'done' ? (
      <Ionicons
        testID="checkmark-outline"
        name={'checkmark-outline'}
        color={'white'}
        size={hp('3%')}
      />
    ) : (
      <Ionicons testID="add" name={'add'} color={'white'} size={hp('3%')} />
    )}
  </TouchableOpacity>
);


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
