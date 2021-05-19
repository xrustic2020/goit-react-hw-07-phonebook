import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const {
  getRequest,
  getSuccess,
  getError,

  addedRequest,
  addedSuccess,
  addedError,

  deleteRequest,
  deleteSuccess,
  deleteError,

  setFilter,
  resetFilter,
} = actions;

const items = createReducer([], {
  [getSuccess]: (_, { payload }) => payload,
  [addedSuccess]: (state, { payload }) => [...state, payload],
  [deleteSuccess]: (state, { payload }) => [
    ...state.filter(el => el.id !== payload),
  ],
});

const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
  [resetFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getRequest]: () => true,
  [getSuccess]: () => false,
  [getError]: () => false,

  [addedRequest]: () => true,
  [addedSuccess]: () => false,
  [addedError]: () => false,

  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
});

export default contactsReducer;
