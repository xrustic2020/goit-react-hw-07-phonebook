import { connect } from 'react-redux';
import { filteredContacts } from 'redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: filteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
