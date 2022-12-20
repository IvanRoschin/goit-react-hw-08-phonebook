import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { selectFiltredContacts } from 'redux/contacts/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!filtredContacts ? (
        <p>Your contactlist is empty</p>
      ) : (
        <table>
          <thead>
            {filtredContacts.map(contact => (
              <ContactItem key={contact.id} {...contact} />
            ))}
          </thead>
        </table>
      )}
      {isLoading && <Loader />}
    </>

    // <ul>
    //   {filtredContacts.map(contact => (
    //     <ContactItem contact={contact} key={contact.id} />
    //   ))}
    // </ul>
  );
};
