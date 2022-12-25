import { ContactForm } from 'components/ContactForm/ContactForm';
import { Overlay, Modal, ModalCloseBtn } from './EditContactModal.styled';
import { toast } from 'react-toastify';
import { RxCross1 } from 'react-icons/rx';

import {
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/slice';

export const EditContactModal = ({ closeModal, id }) => {
  const { data: contacts } = useFetchContactsQuery();

  const [updateContact] = useUpdateContactMutation();
  const handleCloseModal = () => closeModal(false);
  const findContactById = contacts.filter(contact => contact.id === id);

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id, ...fields });
      toast.success('Yoohoo, contact is updated');

      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
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
