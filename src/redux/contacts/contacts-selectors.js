import { createSelector } from '@reduxjs/toolkit';

export const allContacts = state => state.contacts.items;
export const filterValue = state => state.contacts.filter;
export const isloading = state => state.contacts.loading;
export const filteredContacts = createSelector(
  [allContacts, filterValue],
  (contacts, filter) =>
    contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())),
);
