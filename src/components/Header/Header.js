import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Header Component
export const Header = props => {
  return (
    // Container For Header Component
    <SafeAreaView style={styles.floatContainer}>
     
      {/* Left icon on the Header apply condition if props.detail coming from previous screen 
      it shows the back arrow otherwise it shows the menu icon on the Main screen
      */}
      <TouchableOpacity onPress={props.onPress} style={styles.menu}>
        {props.detail ? (
          <Ionicons
            testID="chevron-back-outline"
            name={'chevron-back-outline'}
            size={30}
            color={'grey'}
          />
        ) : (
          <Ionicons
            testID="menu-icon"
            name={'menu'}
            color={'black'}
            size={30}
          />
        )}
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        {/* This is the Title Of The Header */}
        <Text style={styles.text}>{props.title}</Text>

        {/* Right Icon on the Header with condition if the item has Data 
        it must shown with Delete icon other wise with the Add item */}
        {props.id == null ? null : (
          <TouchableOpacity onPress={props.onPressDelete}>
            <Ionicons
              testID="trash-outline"
              name={'trash-outline'}
              size={30}
              color={'grey'}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  floatContainer: {
    height: hp('11%'),
    width: '100%',
    backgroundColor: '#FBFBFB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  titleContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
