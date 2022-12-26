import { ContactForm } from 'components/ContactForm';
import { Overlay, Modal, ModalCloseBtn } from './EditContactModal.styled';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { RxCross1 } from 'react-icons/rx';
import PropTypes from 'prop-types';

import {
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/slice';

const EditContactModal = ({ closeModal, id }) => {
  const { data: contacts } = useFetchContactsQuery();

  const [updateContact] = useUpdateContactMutation();
  const handleCloseModal = () => closeModal(false);
  const findContactById = contacts.filter(contact => contact.id === id);

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id, ...fields });
      toast.success('Contact is updated');

      handleCloseModal();
    } catch (error) {
      toast.error('Contact is not updated');
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        {contacts && (
          <ContactForm
            name={findContactById[0].name}
            number={findContactById[0].number}
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

EditContactModal.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EditContactModal;
