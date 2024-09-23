import { FC } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  filled: boolean;
  callback?: () => void;
  text: string;
};

export const Button: FC<ButtonProps> = ({ filled, callback, text }) => {
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
};
