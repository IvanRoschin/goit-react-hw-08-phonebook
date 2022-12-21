import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${name} is already in contacts.`);
      // resetForm();
      return;
    }
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    toast.success(`${name} is added to Phonebook.`);
  };

  return (
    <ContactForm
      btnText={`Add contact`}
      onSubmit={handleAddContact}
    ></ContactForm>
  );
};
