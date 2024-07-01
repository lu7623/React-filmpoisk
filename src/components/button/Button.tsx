import styles from './styles.module.css';

export default function Button({
  filled,
  callback,
  text,
}: {
  filled: boolean;
  callback: () => void;
  text: string;
}) {
  return (
    <>
      <button
        className={`${styles.button} ${filled ? styles.filled : styles.default}`}
        onClick={callback}
      >
        {text}
      </button>
    </>
  );
}
