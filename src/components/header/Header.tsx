import Button from '../button/Button';
import styles from './header.module.css';

export default function Header({ isAuthorized }: { isAuthorized: boolean }) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Фильмопоиск</h1>
        {isAuthorized ? (
          <Button
            callback={() => alert('hello')}
            filled={true}
            text={'Войти'}
          />
        ) : (
          <>
            <img src={'/Icons/icon-user.svg'} />
            <Button
              callback={() => alert('hello')}
              filled={false}
              text={'Выйти'}
            />
          </>
        )}
      </div>
    </>
  );
}
