import { FC, useState } from 'react';
import { Button } from '../button/Button';
import styles from './styles.module.css';
import { useAppDispatch } from '../../store/store';
import { loginUser } from '../../store/reducers/authSlice';

interface FormState {
  username: string;
  password: string;
}

type ModalProps = {
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormState>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log( name, value)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 dispatch(loginUser(formData))
  };
  return (
    <dialog className={styles.modalContainer}>
      <h3 className={styles.title}>Авторизация</h3>
      <button onClick={onClose} className={styles.closeButton}></button>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <p className={styles.fieldName}>Логин</p>
          <input
          name='username'
            required
            className={styles.input}
            onChange={handleChange}
            placeholder="Введите логин"
          />
        </label>
        <label className={styles.field}>
          <p className={styles.fieldName}>Пароль</p>
          <input
          name='password'
            required
            className={styles.input}
            onChange={handleChange}
            placeholder="Введите пароль"
          />
        </label>
        <div className={styles.buttonContainer}>
          <Button filled={true} callback={() => {}} text="Войти" />
          <Button filled={false} callback={onClose} text="Отменить" />
        </div>
      </form>
    </dialog>
  );
};
