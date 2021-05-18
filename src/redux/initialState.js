// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:4444';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

let items = [];

// const contactsInDB = axios.get('/contacts');
// console.log(contactsInDB);
const contactsInLocalstorage = localStorage.getItem('contacts');

if (contactsInLocalstorage) {
  items = JSON.parse(contactsInLocalstorage);
} else {
  items = defaultContacts;
}

const initialState = {
  contacts: {
    items,
    filter: '',
  },
};

export default initialState;
