import {FlatList} from 'react-native';
import React from 'react';
import {Item} from '../item/Item';
import moment from 'moment';
import {useSelector} from 'react-redux';

export const List = props => {
  const dataList = useSelector(state => state.dataList);

  const onPressItem = item => {
    props.navigation.navigate('Detail', {item: item, screen: 'Edit Item'});
  };

  const renderItem = ({item, index}) => (
    <Item
      CheckBox={item?.check}
      title={item?.title}
      description={item?.description}
      date={moment(item?.date).format('LLLL')}
      onPressItem={() => onPressItem(item)}
    />
  );

  return (
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
