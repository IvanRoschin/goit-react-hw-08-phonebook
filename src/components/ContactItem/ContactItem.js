import { useState } from 'react';
import {
  useDeleteContactMutation,
  useUpdateFavoriteMutation,
} from 'redux/contacts/slice';
import { EditContactModal } from 'components/EditContactModal';
import { Loader } from 'components/Loader';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import EditIcon from '@mui/icons-material/Edit';
import { FavoriteBtn } from './ContactItem.styled';

const ContactItem = ({ _id, name, phone, email, favorite }) => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateFavorite] = useUpdateFavoriteMutation();

  const handleFavorite = e => {
    e.preventDefault();
    updateFavorite({ _id, favorite: String(!favorite) });
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteContact(_id);
    toast.warning(`Contact is deleted`);
  };
  return (
    <TableRow>
      <TableCell>
        <FavoriteBtn type="button" onClick={handleFavorite}>
          {favorite ? <GradeIcon /> : <StarOutlineIcon />}
        </FavoriteBtn>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
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
      {openModal && <EditContactModal closeModal={setOpenModal} id={_id} />}
    </TableRow>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default ContactItem;
