import Button from '../button/Button';
import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.title}>Фильмопоиск</p>
        <Button callback={() => alert('hello')} filled={true} text={'Войти'} />
      </div>
    </>
  );
}
