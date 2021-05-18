import { createAction } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4444';

const getContacts = _ => dispatch => {
  dispatch({ type: 'contacts/getRequest' });
  axios
    .get('/contacts')
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: 'contacts/getSucces', payload: data });
    })
    .catch(error => dispatch({ type: 'contacts/getError', payload: error }));
};

// const getContacts = createAction('contacts/get');
const addedContact = createAction('contacts/add');
const deleteContactItem = createAction('contacts/delete');

const contactsActions = {
  getContacts,
  addedContact,
  deleteContactItem,
};

export default contactsActions;
