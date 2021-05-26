import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { operations } from 'redux/contacts';
import s from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;
  return (
    <li className={s.listItem}>
      <div className={s.fullName}>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <IconButton aria-label="Delete" onClick={() => onDeleteContact(contact)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: contact => dispatch(operations.deleteContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);
