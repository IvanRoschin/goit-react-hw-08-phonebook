import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const ContactComponent = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleAddContact = async values => {
    const isExist = contacts.find(contact => contact.name === values.name);
    if (isExist) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }
    try {
      await addContact(values);
      toast.success(`${values.name} is added to Phonebook.`);
    } catch (error) {
      toast.error(`error`);
    }
  };

  return (
    <>
      <ContactForm
        btnText={`Add contact`}
        onSubmit={handleAddContact}
      ></ContactForm>
    </>
  );
};

export default ContactComponent;
