import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Item from './Item';
import moment from 'moment';
import {useSelector} from 'react-redux';

const List = props => {
  const dataList = useSelector(state => state.dataList);

  const onPressItem = (item, index) => {
    props.navigation.navigate('Detail', {item: item , screen :'Edit Item'});
  };

  const renderItem = ({item, index}) => (
    <Item
      CheckBox={item?.check}
      title={item?.title}
      description={item?.description}
      date={moment(item?.date).format('LLLL')}
      onPressItem={() => onPressItem(item, index)}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
