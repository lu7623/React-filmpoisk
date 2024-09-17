import { useState } from 'react';
import { Button } from '../button/Button';
import styles from './styles.module.css';

interface FormState {
  login: string;
  password: string;
}

export default function Modal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormState>({
    login: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(formData);
  };
  return (
    <dialog className={styles.modalContainer}>
      <h3 className={styles.title}>Авторизация</h3>
      <button onClick={onClose} className={styles.closeButton}></button>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <p className={styles.fieldName}>Логин</p>
          <input
            required
            className={styles.input}
            onChange={handleChange}
            placeholder="Введите логин"
          />
        </label>
        <label className={styles.field}>
          <p className={styles.fieldName}>Пароль</p>
          <input
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
}
