import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};

export const useModalEdit = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModalEdit = () => setIsOpenEdit(true);

  const closeModalEdit = () => setIsOpenEdit(false);

  return [isOpenEdit, openModalEdit, closeModalEdit];
};
