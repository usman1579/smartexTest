import {render, screen, fireEvent} from '@testing-library/react-native';
import { List } from '../List';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../../redux/reducer';
import moment from 'moment';

const dataList = [
  {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    date: new Date(),
    check: true
  },
  {
    id: '2',
    title: 'Test Title 2',
    description: 'Test Description 2',
    date: new Date(),
    check: false
  }
]

describe('List Component', () => {
    let store;
    let navigation;
    beforeEach(() => {
      store = createStore(reducer);
      navigation = { navigate: jest.fn() };
      store.dispatch({ type: 'SET_DATA_LIST', dataList });
    });
    it('should render the component with data and call onPressItem', () => {
      const { getAllByTestId } = render(
        <Provider store={store}>
          <List navigation={navigation} />
        </Provider>
      );
      const items = getAllByTestId('item');
      
      expect(items.length).toBe(2);
      expect(store.getState().dataList).toEqual(dataList)
      fireEvent.press(items[0]);
      expect(navigation.navigate).toHaveBeenCalledWith('Detail', {
        item: dataList[0],
        screen:'Edit Item'
    });
});
});