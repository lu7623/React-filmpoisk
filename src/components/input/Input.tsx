import styles from './styles.module.css';

export default function Input() {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="Название фильма"
      />
    </>
  );
}
