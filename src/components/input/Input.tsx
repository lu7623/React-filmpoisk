import { FC } from 'react';
import styles from './styles.module.css';

type InputProps = {
  callback: (val: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ callback }) => {
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
};
