import styles from './styles.module.css';

export default function Input({
  callback,
}: {
  callback: (val: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="Название фильма"
        onChange={callback}
      />
    </>
  );
}
