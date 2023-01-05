import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import DateView from './components/DateView';
import {useDispatch} from 'react-redux';
import FloatingButton from './components/FloatingButton';
import {addDataToList, deleteItem} from './redux/reducer';
import Header from './components/Header';
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
      
      <Header
        detail={true}
        title={screen}
        id={item.id}
        onPressDelete={() => onPressDelete(item)}
        onPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          height: 80,
          width: '95%',
          alignSelf: 'center',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{color: 'blue', fontSize: 12, fontWeight: '500'}}>
          TiTle
        </Text>
        <TextInput
          placeholder="type Here"
          value={title}
          onChangeText={title => setTitle(title)}
          style={{height: 50, width: '100%', fontSize: 16}}
          underlineColorAndroid={'grey'}
        />
      </View>


      <View
        style={{
          height: 120,
          width: '95%',
          alignSelf: 'center',
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'blue', fontSize: 12, fontWeight: '500'}}>
          Description
        </Text>
        <TextInput
          multiline
          placeholder="type Here"
          value={description}
          onChangeText={desc => setDescription(desc)}
          style={{height: 100, width: '100%', fontSize: 16}}
          underlineColorAndroid={'grey'}
        />
      </View>

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

      <FloatingButton type={'done'} onPress={onPressAddData} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  dateView: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
  },
});
