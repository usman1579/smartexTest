import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Main';
import Detail from './src/Detail';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

// Stack Navigator For Stack of Screens
const Stack = createNativeStackNavigator();

// Drawer Navigator For Side Menu
const Drawer = createDrawerNavigator();

// Static Image For Profile Photo
const ImageURL =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

// Drawer Component
function DrawerScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator to put screens in Stack by React-Navigation library
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Custom Drwaer Navigator for the App
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.customDrawer}>
        <View style={styles.drawerContainer}>
          <Image
            source={{uri: ImageURL}}
            style={styles.Image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.emailCOntainer}>
          <Text> usmanrafique1579@gmail.com </Text>
          <Ionicons name="caret-down-outline" size={20} color={'grey'} />
        </View>
      </SafeAreaView>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// // Main Stack of the Application Main Navigator where is the
// Store Provider for redux state as well as parent navigator
const App = () => {
  return (
    // Store Provider For Redux For Global State management
    <StoreProvider store={store}>
      <NavigationContainer headerMode="none">
        <DrawerScreen />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  drawerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 20,
    left: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  customDrawer: {
    height: heightPercentageToDP('25%'),
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  emailCOntainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
