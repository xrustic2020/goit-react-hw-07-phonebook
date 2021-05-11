import { createAction } from '@reduxjs/toolkit';

const setFilter = createAction('filter/set');
const resetFilter = createAction('filter/reset');

const filterActions = {
  setFilter,
  resetFilter,
};

export default filterActions;
