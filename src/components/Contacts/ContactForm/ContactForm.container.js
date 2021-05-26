import { connect } from 'react-redux';
import { operations, actions } from 'redux/contacts';

import ContactForm from './ContactForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddedContact: newContact => dispatch(operations.addedContact(newContact)),
    setFilter: value => dispatch(actions.setFilter(value)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
