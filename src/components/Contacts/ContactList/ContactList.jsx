import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactItem from 'components/Contacts/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={s.container}>
      {filteredContacts.map(el => (
        <ContactItem contact={el} key={el.id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(ContactList);
