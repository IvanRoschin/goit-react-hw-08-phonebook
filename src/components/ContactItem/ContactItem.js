import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';

export const ContactItem = ({ id, name, number }) => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDelete = e => {
    e.preventDefault();
    deleteContact(id);
    toast.warning(`Contact is deleted`);
  };
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <EditIcon />
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          type="button"
          disabled={isDeleting}
          onClick={handleDelete}
        >
          {isDeleting ? <Loader /> : <PersonRemoveIcon />}
        </Button>
      </TableCell>
      {openModal && <EditContactModal closeModal={setOpenModal} id={id} />}
    </TableRow>
  );
};
