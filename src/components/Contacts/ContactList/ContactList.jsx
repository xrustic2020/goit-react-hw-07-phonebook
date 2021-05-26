import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

import { filteredContacts } from 'redux/contacts';

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

const mapStateToProps = state => ({
  contacts: filteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
