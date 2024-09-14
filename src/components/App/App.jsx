// src/components/App/App.jsx
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchContact = useSelector(state => state.filters.name);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={foundContacts} onDelete={handleDelete} />{' '}
    </div>
  );
}
