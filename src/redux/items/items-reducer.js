import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import actions from './items-actions.js';

const itemsReducer = createReducer(initialState.contacts.items, {
  [actions.addedContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContactItem]: (state, { payload }) => [
    ...state.filter(el => el.id !== payload),
  ],
});

export default itemsReducer;
