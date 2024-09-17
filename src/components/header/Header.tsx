import { FC } from 'react';
import { Button } from '../button/Button';
import styles from './header.module.css';

type HeaderProps = {
  isAuthorized: boolean;
};

export const Header: FC<HeaderProps> = ({ isAuthorized }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Фильмопоиск</h1>
        {isAuthorized ? (
          <div className={styles.userContainer}>
            <div className={styles.img} />
            <Button callback={() => {}} filled={false} text={'Выйти'} />
          </div>
        ) : (
          <Button callback={() => {}} filled={true} text={'Войти'} />
        )}
      </header>
    </>
  );
};
