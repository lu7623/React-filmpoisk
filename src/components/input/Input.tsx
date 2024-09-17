import { FC } from 'react';
import styles from './styles.module.css';


type InputProps = {
  callback: (val: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Input: FC<InputProps> = ({ callback, placeholder }) => {
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
};
