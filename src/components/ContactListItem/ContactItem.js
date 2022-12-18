import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactSlice';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import { Btn } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDelete = e => {
    e.preventDefault();
    deleteContact(id);
    toast.warning(`Contact is deleted`);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <Btn
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Update
        </Btn>
      </td>
      {openModal && <EditContactModal closeModal={setOpenModal} id={id} />}
      <td>
        <Btn type="button" disabled={isDeleting} onClick={handleDelete}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Btn>
      </td>
    </tr>
  );
};
