import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';

const visibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filteredData = visibleContacts(contacts, filter);
  return (
    <ul>
      {filteredData.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
