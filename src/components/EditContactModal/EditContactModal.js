import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  Overlay,
  Modal,
  Title,
  ModalCloseBtn,
} from './EditContactModal.styled';
import { RxCross1 } from 'react-icons/rx';
import { updateContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContactById } from 'redux/contacts/selectors';

// import {
//   useGetContactByIdQuery,
//   useUpdateContactMutation,
// } from 'redux/contactSlice';

export const EditContactModal = ({ closeModal, id }) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => selectContactById(state, id));

  useEffect(() => {
    dispatch(updateContact(contact));
  }, [dispatch, contact]);

  // const { data: contact } = useGetContactByIdQuery(id);
  // const [updateContact] = useUpdateContactMutation();
  const handleCloseModal = () => closeModal(false);

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: id, ...fields });
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        <Title>Contact Update</Title>
        {contact && (
          <ContactForm
            initialValues={{ name: contact.name, phone: contact.phone }}
            btnText="Save"
            onSubmit={handleUpdateContact}
          />
        )}
        <ModalCloseBtn type="button" onClick={handleCloseModal}>
          <RxCross1 size={32} />
        </ModalCloseBtn>
      </Modal>
    </Overlay>
  );
};
