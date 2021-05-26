import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';

import { operations, actions } from 'redux/contacts';
import store from 'redux/store';

import s from './ContactForm.module.css';

const ContactForm = ({ onAddedContact, setFilter }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      number,
    };
    setName('');
    setNumber('');

    const prevState = store.getState().contacts.items;
    const contactFound = prevState.find(el => el.name === name);
    if (contactFound) {
      toast.warn(`"${name}" is already in contacts`);
      setFilter(name);
      return;
    } else if (!name) {
      toast.error('the "Name" field must contain the name of the contact');
      return;
    } else if (!number) {
      toast.error('the "Number" field must contain the contact number');
      return;
    }

    onAddedContact(newContact);
  };

  return (
    <form onSubmit={evt => handleSubmit(evt)} className={s.form}>
      <div className={s.overlay}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
        </label>

        <label>
          <span>Number</span>
          <input
            type="number"
            name="number"
            className={s.input}
            value={number}
            onChange={evt => setNumber(evt.target.value)}
          />
        </label>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddOutlinedIcon />}
      >
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddedContact: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedContact: newContact => dispatch(operations.addedContact(newContact)),
    setFilter: value => dispatch(actions.setFilter(value)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
