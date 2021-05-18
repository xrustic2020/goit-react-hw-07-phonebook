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

export default getContacts;
