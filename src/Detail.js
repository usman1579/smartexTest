import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import DateView from './components/DateView';
import {useDispatch} from 'react-redux';
import {FloatingButton} from './components/FloatingButton/FloatingButton';
import {addDataToList, deleteItem} from './redux/reducer';
import {Header} from './components/Header/Header';
import uuid from 'react-native-uuid';

const Detail = props => {
  const item = props.route.params.item;
  const screen = props.route.params.screen;
  const [title, setTitle] = useState(item?.title);
  const [description, setDescription] = useState(item?.description);
  const [date, setDate] = useState(item.date);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(null);
  const dispatch = useDispatch();

  const onPressDatePicker = mode => {
    setMode(mode);
    setOpen(true);
  };

  const onPressAddData = () => {
    const data = {
      title: title,
      description: description,
      date: date,
      check: item.chek || false,
      id: item?.id || uuid.v4(),
    };
    dispatch(addDataToList(data));
    props.navigation.goBack();
  };

  const onPressDelete = item => {
    Alert.alert('Alert', 'Are You Sure!', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteItem(item));
          props.navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header Component */}
      <Header
        detail={true}
        title={screen}
        id={item.id}
        onPressDelete={() => onPressDelete(item)}
        onPress={() => props.navigation.goBack()}
      />

      {/* TextInput Component For Input Title Field */}
      <TitleComponent
        title="Title"
        value={title}
        onChangeText={title => setTitle(title)}
        Container={styles.titleContainer}
        TextInput={styles.titleTextInput}
      />

      {/* TextInput Component For Input Description Field */}
      <TitleComponent
        title="Description"
        value={description}
        onChangeText={desc => setDescription(desc)}
        Container={styles.descriptionContainer}
        TextInput={styles.descriptionTextInput}
      />

      {/* Modal View For Date and Time */}
      <View style={styles.dateView}>
        <DateView
          onPress={() => onPressDatePicker('date')}
          Date={moment(date).format('dddd , MMM DD YYYY')}
          flex={3}
        />

        <DateView
          onPress={() => onPressDatePicker('time')}
          Date={moment(date).format('hh:mm')}
          flex={1}
        />
      </View>

      {/* Date Picker Library to pick the Date  */}
      <DatePicker
        mode={mode}
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      {/* Floating Button */}
      <FloatingButton type={'done'} onPress={onPressAddData} />
    </View>
  );
};

export default Detail;

const TitleComponent = props => (
  <View style={props.Container}>
    <Text style={styles.titleText}>{props.title}</Text>
    <TextInput
      placeholder="type Here"
      value={props.value}
      onChangeText={props.onChangeText}
      style={props.TextInput}
      underlineColorAndroid={'grey'}
    />
  </View>
);

const styles = StyleSheet.create({
  dateView: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
  },
  titleContainer: {
    height: 80,
    width: '95%',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleText: {
    color: 'blue',
    fontSize: 12,
    fontWeight: '500',
  },
  titleTextInput: {height: 50, width: '100%', fontSize: 16},
  descriptionContainer: {
    height: 120,
    width: '95%',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  descriptionTextInput: {height: 100, width: '100%', fontSize: 16},
});
