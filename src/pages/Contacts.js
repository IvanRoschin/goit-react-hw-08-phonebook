import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactFilter/Filter';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import Box from '@mui/material/Box';

export default function Contacts() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 20,
        }}
      >
        <ContactEditor />
        <Filter />
      </Box>
      <ContactList />
    </>
  );
}
