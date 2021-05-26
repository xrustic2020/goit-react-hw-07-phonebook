import { useState } from 'react';
import PropTypes from 'prop-types';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';

import s from './ContactForm.module.css';
import checkingContact from './checkingContact';

const ContactForm = ({ onAddedContact, setFilter }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const isCheckedContact = checkingContact(name, number, setFilter);
    setName('');
    setNumber('');

    if (isCheckedContact) onAddedContact(isCheckedContact);
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

export default ContactForm;
