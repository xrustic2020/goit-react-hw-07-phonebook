import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.container}>
      {contacts.map(el => (
        <ContactItem contact={el} key={el.id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
