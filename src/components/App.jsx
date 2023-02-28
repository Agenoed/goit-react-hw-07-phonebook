import { ContactForm } from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getStatusFilter, getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

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
      {contacts.length || filter ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Contacts is empty!</p>
      )}
    </div>
  );
}
