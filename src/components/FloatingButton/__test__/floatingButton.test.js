import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import FloatingButton from '../FloatingButton';
import {shallow} from 'enzyme';
import {addDataToList} from '../../../redux/reducer';


describe('Floating Button', () => {

  let onPressAddData
  const title = 'Test Title'
  const description = 'Test Description'
  const date = new Date()
  const item = {check: true, id: '1'}
  const navigation = { goBack: jest.fn() }
  const dispatch = jest.fn()

  beforeEach(() => {
    onPressAddData = jest.fn(() => {
      dispatch(addDataToList({
        title: title,
        description: description,
        date: date,
        check: item.chek || false,
        id: item?.id || uuid.v4(),
      }));
      navigation.goBack();
    });
  });

  it('renders correctly on Main Screen', () => {
    const {getByTestId} = render(<FloatingButton />);
    expect(getByTestId('add')).toBeTruthy();
  });

  it('calls navigation.navigate when pressed', () => {
    const data = {
      id: 1,
      name: 'Test',
      description: 'here is description',
      date: new Date(),
    };
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <FloatingButton
        navigation={navigation}
        onPress={() =>
          navigation.navigate('Detail', {item: data, screen: 'Add Item'})
        }
      />,
    );
    const button = getByTestId('floating-button');
    fireEvent.press(button);
    expect(navigation.navigate).toHaveBeenCalledWith('Detail', {
      item: data,
      screen: 'Add Item',
    });
  });

  it('renders correctly on Detail Screen with Tick Icon', () => {
    const {getByTestId} = render(<FloatingButton type={'done'} />);
    expect(getByTestId('checkmark-outline')).toBeTruthy();
  });
 
  it('calls onPressAddData when pressed and dispatches addDataToList action', () => {
    const { getByTestId } = render(
      <FloatingButton
        navigation={navigation}
        onPress={onPressAddData}
        type='done'
        title={title}
        description={description}
        date={date}
        item={item}
        dispatch={dispatch}
      />
    );
    const button = getByTestId('floating-button');
    fireEvent.press(button)
    expect(onPressAddData).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(addDataToList({
      title: title,
      description: description,
      date: date,
      check: item.chek || false,
      id: item?.id || uuid.v4(),
    }));
    expect(navigation.goBack).toHaveBeenCalled();
  });
 
});

