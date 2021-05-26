import axios from 'axios';
import { toast } from 'react-toastify';
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
      dispatch(getSuccess(data));
    })
    .catch(error => dispatch(getError(error)));
};

const addedContact = contact => dispatch => {
  dispatch(addedRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addedSuccess(data));
      toast.success(
        `Contact "${data.name}" with number "${data.number}" has been successfully created`,
      );
    })
    .catch(error => dispatch(addedError(error)));
};

const deleteContact = ({ id, name }) => dispatch => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteSuccess(id));
      toast.success(`Contact "${name}" successfully deleted`);
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
