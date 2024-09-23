import { FC } from 'react';
import { Button } from '../button/Button';
import styles from './header.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setIsAuthorized } from '../../store/reducers/authSlice';

type HeaderProps = {
  callback: () => void;
};

export const Header: FC<HeaderProps> = ({ callback }) => {
  const {isAuthorized}= useAppSelector(state => state.authorization)
  const dispatch = useAppDispatch();
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Фильмопоиск</h1>
        {isAuthorized ? (
          <div className={styles.userContainer}>
            <div className={styles.img} />
            <Button
              callback={() => {
                if (isAuthorized) {
                  localStorage.removeItem("token");
                  dispatch(setIsAuthorized(false))
                }
              }}
              filled={false}
              text={'Выйти'}
            />
          </div>
        ) : (
          <Button
            callback={() => {
              callback();
             
            }}
            filled={true}
            text={'Войти'}
          />
        )}
      </header>
    </>
  );
};
