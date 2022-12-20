import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, DeleteBtn } from './ContactItem.styled';
// import EditForm from 'components/editForm/EditForm';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <>
      <ListItem>
        {contact.name}: {contact.number}
        <DeleteBtn
          type="button"
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </DeleteBtn>
      </ListItem>
    </>
  );
};

export default ContactItem;
