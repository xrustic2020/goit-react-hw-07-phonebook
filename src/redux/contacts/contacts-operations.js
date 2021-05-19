import axios from 'axios';
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
} = actions;

axios.defaults.baseURL = 'http://localhost:4444';

const getContacts = () => dispatch => {
  dispatch(getRequest());
  axios
    .get('/contacts')
    .then(({ data }) => {
      console.log('get:', data);
      dispatch(getSuccess(data));
    })
    .catch(error => dispatch(getError(error)));
};

const addedContact = contact => dispatch => {
  dispatch(addedRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      console.log('post:', data);
      dispatch(addedSuccess(data));
    })
    .catch(error => dispatch(addedError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      console.log('delete');
      dispatch(deleteSuccess(id));
    })
    .catch(error => dispatch(deleteError(error)));
};

////////////////////////

const operations = {
  getContacts,
  addedContact,
  deleteContact,
};

export default operations;
