import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactFilter/Filter';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

export default function Contacts() {
  return (
    <>
      <ContactEditor />
      <Filter />
      <ContactList />
    </>
  );
}
