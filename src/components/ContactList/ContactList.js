import { useFetchContactsQuery } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {isFetching && <Loader />}
      {!contacts ? (
        <p>Your contactlist is empty</p>
      ) : (
        <ul>
          {filtredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
};
