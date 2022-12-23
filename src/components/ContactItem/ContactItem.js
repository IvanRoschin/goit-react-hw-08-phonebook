import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import { Btn, ListItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDelete = e => {
    e.preventDefault();
    deleteContact(id);
    toast.warning(`Contact is deleted`);
  };
  return (
    <ListItem>
      {name}: {number}
      <div>
        <Btn
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Update
        </Btn>
        <Btn type="button" disabled={isDeleting} onClick={handleDelete}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Btn>
      </div>
      {openModal && <EditContactModal closeModal={setOpenModal} id={id} />}
    </ListItem>
  );
};
