import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { EditContactModal } from 'components/EditContactModal';
import { Loader } from 'components/Loader';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';

const ContactItem = ({ id, name, number }) => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDelete = e => {
    e.preventDefault();
    deleteContact(id);
    toast.warning(`Contact is deleted`);
  };
  return (
    <>
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
      </TableRow>
      {openModal && <EditContactModal closeModal={setOpenModal} id={id} />}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
