import { useState } from 'react';
import styles from './styles.module.css';

export default function Score({ id }: { id: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div
      className={styles.ratingContainer}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onChange={(e) => {
                  e.stopPropagation();
                  setRating(currentRating);
                }}
              />
              <div
                className={styles.label}
                style={{
                  backgroundImage: hover
                    ? currentRating <= hover
                      ? 'url(/Icons/star-filled-grey.svg)'
                      : 'url(/Icons/star.svg)'
                    : currentRating <= rating
                      ? 'url(/Icons/star-filled.svg)'
                      : 'url(/Icons/star.svg)',
                }}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              >
                <span className={styles.mark}>{currentRating}</span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
