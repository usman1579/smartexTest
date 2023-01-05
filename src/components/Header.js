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

const Header = props => {
  return (
    <SafeAreaView style={styles.floatContainer}>
      <TouchableOpacity onPress={props.onPress} style={styles.menu}>
      {
          props.detail ?
          <Ionicons name={'chevron-back-outline'} size={30} color={'grey'}/>
          :
          <Ionicons name={'menu'} color={'black'} size={30} />
        }
        
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.text}>{props.title}</Text>
        {
          props.detail ?
          <TouchableOpacity onPress={props.onPressDelete}>
          <Ionicons name={'trash-outline'} size={30} color={'grey'}/>
          </TouchableOpacity>
          :
          null
        }
       
      </View>
    </SafeAreaView>
  );
};

export default Header;

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
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginRight:20
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
