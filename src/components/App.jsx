import { ContactForm } from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatusFilter,
  getContacts,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 || filter || isLoading ? (
        <Filter />
      ) : (
        <p>Contacts is empty!</p>
      )}
      {isLoading && !error && <p>Loading data...</p>}
      <ContactList />
    </div>
  );
}
