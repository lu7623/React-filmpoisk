import { FC } from 'react';
import { Button } from '../button/Button';
import styles from './header.module.css';


type HeaderProps = {
 callback: () => void
};

export const Header: FC<HeaderProps> = ({ callback }) => {

  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Фильмопоиск</h1>
        {isAuthorized ? (
          <div className={styles.userContainer}>
            <div className={styles.img} />
            <Button
              callback={() => {
                setIsAuthorized(false);
              }}
              filled={false}
              text={'Выйти'}
            />
          </div>
        ) : (
          <Button
            callback={() => {
              callback();
              setIsAuthorized(true);
            }}
            filled={true}
            text={'Войти'}
          />
        )}
      </header>
    </>
  );
};
