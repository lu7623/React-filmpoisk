import { Outlet } from 'react-router-dom';
import {Header} from '../../components/header/Header';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../../components/modal/Modal';

export const RootLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header callback={() => setShowModal(true)} />
      <Outlet />
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};
