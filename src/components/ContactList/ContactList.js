import { useFetchContactsQuery } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Loader } from 'components/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);
  const filter = useSelector(getFilter);
  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {isFetching && <Loader />}
      {contacts?.length === 0 ? (
        <Typography variant="h6" component="h2" align="center" color="#1976d2">
          Your contactlist is empty
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            color="#1976d2"
          >
            Your Contact List here
          </Typography>
          <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Favorite</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtredContacts.map(contact => (
                <ContactItem key={contact._id} {...contact} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ContactList;
