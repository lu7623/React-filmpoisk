import { useState } from 'react';
import Button from '../button/Button';
import styles from './header.module.css';

export default function Header() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Фильмопоиск</h1>
        {isAuthorized ? (
          <div className={styles.userContainer}>
            <div className={styles.img} />
            <Button
              callback={() => setIsAuthorized(false)}
              filled={false}
              text={'Выйти'}
            />
          </div>
        ) : (
          <Button
            callback={() => setIsAuthorized(true)}
            filled={true}
            text={'Войти'}
          />
        )}
      </header>
    </>
  );
}
