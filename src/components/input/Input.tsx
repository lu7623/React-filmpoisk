import styles from './styles.module.css';

export default function Input({
  callback,
  placeholder,
}: {
  callback: (val: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={callback}
      />
    </>
  );
}
