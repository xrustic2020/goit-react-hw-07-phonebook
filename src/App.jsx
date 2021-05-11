import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import Container from 'components/Container';
import Section from 'components/Section';

const App = ({ contacts }) => {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <div>
          <Filter />
          <ContactList />
        </div>
      </Section>
      <ToastContainer />
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
