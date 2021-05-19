import { createAction } from '@reduxjs/toolkit';

const getRequest = createAction('contacts/getRequest');
const getSuccess = createAction('contacts/getSucess');
const getError = createAction('contacts/getError');

const addedRequest = createAction('contacts/addedRequest');
const addedSuccess = createAction('contacts/addedSucess');
const addedError = createAction('contacts/addedError');

const deleteRequest = createAction('contacts/deleteRequest');
const deleteSuccess = createAction('contacts/deleteSucess');
const deleteError = createAction('contacts/deleteError');

const setFilter = createAction('filter/set');
const resetFilter = createAction('filter/reset');

const actions = {
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
};

export default actions;
