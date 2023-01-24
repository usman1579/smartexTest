import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Header from '../Header';

describe('Header', () => {

    it('renders correctly on Menu Header', () => {
      const {getByText, getByTestId} = render(<Header title="Lista de tarefas"  detail={false} />);
      expect(getByText('Lista de tarefas')).toBeTruthy();
      expect(getByTestId('menu-icon')).toBeTruthy();
    });

    it( 'Header render Add Item' , () => {
        const {getByText, getByTestId} = render(<Header title="Add Item"  detail={true} id={null} />);
        expect(getByText('Add Item')).toBeTruthy();
        expect(getByTestId('chevron-back-outline')).toBeTruthy();
    })

    it( 'Header render Edit Item' , () => {
        const {getByText, getByTestId} = render(<Header title="Edit Item"  detail={true} id={'123'} />);
      
        expect(getByText('Edit Item')).toBeTruthy();
        expect(getByTestId('chevron-back-outline')).toBeTruthy();
        expect(getByTestId('trash-outline')).toBeTruthy();

    })

    it('calls onPress prop when menu icon is pressed', () => {
      const onPress = jest.fn();
      const {getByTestId} = render(<Header title="Test Title" onPress={onPress} />);
      fireEvent.press(getByTestId('menu-icon'));
      expect(onPress).toHaveBeenCalled();
    });

    it('calls onPressDelete prop when delete icon is pressed', () => {
      const onPressDelete = jest.fn();
      const {getByTestId} = render(
        <Header title="Test Title" id={'123'} onPressDelete={onPressDelete} />,
      );
      fireEvent.press(getByTestId('trash-outline'));
      expect(onPressDelete).toHaveBeenCalled();
    });

});

