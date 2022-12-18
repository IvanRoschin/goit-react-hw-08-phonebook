import { useFetchContactsQuery } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';

export const FiltredContacts = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLocaleLowerCase();

  console.log('contacts', contacts);
  console.log('filter', filter);

  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );
};
