import { useEffect } from 'react';
import propTypes from 'prop-types';
import { ModalOverlay, ModalWindow } from './Modal.styled';
import { ModalForm } from './ModalForm';
import { ModalDeleteConfirmation } from './ModalDelete';


export const Modal = ({ id, closeModal, status, name }) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        {status === 'edit' ? (
          <ModalForm id={id} closeModal={closeModal} />
        ) : (
          <ModalDeleteConfirmation
            id={id}
            name={name}
            closeModal={closeModal}
          />
        )}
      </ModalWindow>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
