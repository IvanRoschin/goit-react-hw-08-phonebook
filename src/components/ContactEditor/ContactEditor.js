import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/slice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ContactEditor = () => {
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
    <Box>
      <Typography variant="h6" component="h2" align="center" color="#1976d2">
        Add Contact
      </Typography>
      <ContactForm
        btnText={`Add contact`}
        onSubmit={handleAddContact}
      ></ContactForm>
    </Box>
  );
};
