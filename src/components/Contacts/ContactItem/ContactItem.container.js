import { connect } from 'react-redux';
import { operations } from 'redux/contacts';

import ContactItem from './ContactItem';

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: contact => dispatch(operations.deleteContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);
