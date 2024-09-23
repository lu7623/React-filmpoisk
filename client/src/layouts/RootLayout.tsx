import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header1/Header';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../components/Modal1/Modal';
import { useAppDispatch } from '../store/store';
import { setIsAuthorized } from '../store/reducers/authSlice';

export const RootLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setIsAuthorized(true));
    }
  }, []);
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
