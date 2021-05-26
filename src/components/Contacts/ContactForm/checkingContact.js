import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from 'redux/store';

export default function checkingContact(name, number, setFilter) {
  if (!name) {
    toast.error('the "Name" field must contain the name of the contact');
    return;
  } else if (!number) {
    toast.error('the "Number" field must contain the contact number');
    return;
  }

  const prevState = store.getState().contacts.items;
  const contactFound = prevState.find(el => el.name === name);

  if (contactFound) {
    toast.warn(`"${name}" is already in contacts`);
    setFilter(name);
    return;
  }

  return { name, number };
}
