import { useState } from 'react';
import styles from './styles.module.css';

export default function Score() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className={styles.ratingContainer} onMouseEnter={() => setValue(0)}>
      <div className={styles.rating}>
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={value === 5}
          className={styles.star}
        />

        <label htmlFor="star5" title="Awesome" aria-hidden="true">
          <span className={styles.mark}>5</span>
        </label>

        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={value === 4}
          className={styles.star}
        />

        <label htmlFor="star4" title="Great" aria-hidden="true">
          <span className={styles.mark}>4</span>
        </label>
        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={value === 3}
          className={styles.star}
        />

        <label htmlFor="star3" title="Very good" aria-hidden="true">
          <span className={styles.mark}>3</span>
        </label>

        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={value === 2}
          className={styles.star}
        />

        <label htmlFor="star2" title="Good" aria-hidden="true">
          <span className={styles.mark}>2</span>
        </label>

        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={value === 1}
          className={styles.star}
        />

        <label htmlFor="star1" title="Bad" aria-hidden="true">
          <span className={styles.mark}>1</span>
        </label>
      </div>
    </div>
  );
}
