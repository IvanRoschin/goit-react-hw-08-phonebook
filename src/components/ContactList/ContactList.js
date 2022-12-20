import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
