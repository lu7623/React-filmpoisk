import { FC, useState } from 'react';
import styles from './styles.module.css';
import { useAppSelector } from '../../store/store';
import { useRateMovie } from '../../hooks/useRateMovie';

type ScoreProps = {
  id: string;
};

export const Score: FC<ScoreProps> = ({ id }) => {

  const [hover, setHover] = useState<number | null>(null);
  const {initialRating, rateMovie} = useRateMovie(id);
  const [rating, setRating] = useState(initialRating);

  const isAuthorized = useAppSelector(
      (state) => state.authorization.isAuthorized
  );

  if (!isAuthorized) {
      return null;
  }
  return (
    <div
      className={styles.ratingContainer}
      onClick={(e) => {
        e.stopPropagation();
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
                onChange={() => {
                  setRating(currentRating);
                  rateMovie(currentRating)
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
};
