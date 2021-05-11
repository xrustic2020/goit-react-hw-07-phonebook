import { createAction } from '@reduxjs/toolkit';

const addedContact = createAction('contacts/add');
const deleteContactItem = createAction('contacts/delete');

const contactsActions = {
  addedContact,
  deleteContactItem,
};

export default contactsActions;
