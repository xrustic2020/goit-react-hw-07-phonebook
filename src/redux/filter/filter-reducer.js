import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import actions from './filter-actions';

const filterReducer = createReducer(initialState.contacts.filter, {
  [actions.setFilter]: (_, { payload }) => payload,
  [actions.resetFilter]: (_, { payload }) => payload,
});

export default filterReducer;
