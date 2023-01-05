import update from 'immutability-helper';

export const addDataToList = val => {
    console.log('val :::',val)
  return {
    type: 'DATA_LIST',
    payload:val,
  };
};

export const deleteItem = val => {
  return {
    type: 'DELETE_ITEM',
    payload:val,
  };
};

const InitialState = {
  dataList: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'DATA_LIST':
      let index = state.dataList?.findIndex(p => p.id == action.payload.id);
      console.log('index', index)
      if (index == -1) {
        return {
          ...state,
          dataList: [...state.dataList, action.payload],
        };
      } else {
        return update(state, {
          dataList: {
            [index]: {$set: action.payload},
          },
        });
      }

    case 'DELETE_ITEM':
      let newList = state.dataList?.filter(p => p.id !== action.payload.id);
      return {
        ...state,
        dataList:  newList
      };

    default:
      return state;
  }
};

export default reducer;
