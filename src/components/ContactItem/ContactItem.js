import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import { Btn } from './ContactItem.styled';
import { selectIsLoading } from 'redux/contacts/selectors';

// import EditForm from 'components/editForm/EditForm';

const ContactItem = ({ id, name, phone }) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteContact(id));
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
        <Btn type="button" disabled={isLoading} onClick={handleDelete}>
          {isLoading ? <Loader /> : 'Delete'}
        </Btn>
      </td>
    </tr>
  );
};

export default ContactItem;
