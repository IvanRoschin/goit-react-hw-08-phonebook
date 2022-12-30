import { ContactList } from 'components/ContactList';
import { Filter } from 'components/ContactFilter';
import { ContactEditor } from 'components/ContactEditor';
import Box from '@mui/material/Box';

export default function Contacts() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 20,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
        }}
      >
        <ContactEditor />
        <Filter />
      </Box>
      <ContactList />
    </>
  );
}
