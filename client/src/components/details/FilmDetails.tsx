import { ShortMovieInfo } from '@/api/types';
import styles from './styles.module.css';
import { Score } from '../score/Score';
import { FC } from 'react';

type DetailsProps = {
  film: ShortMovieInfo;
};

export const FilmDetails: FC<DetailsProps> = ({ film }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${film.poster})` }}
        ></div>
        <div className={styles.infoContainer}>
          <Score id={film.id} />
          <h3 className={styles.title}>{film.title}</h3>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Жанр:</p>
            <p className={styles.infoText}>{film.genre}</p>
          </div>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Год выпуска:</p>
            <p className={styles.infoText}>{film.release_year}</p>
          </div>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Рейтинг:</p>
            <p className={styles.infoText}>{film.rating}</p>
          </div>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Описание</p>
          </div>
          <p className={styles.description}>{film.description}</p>
        </div>
      </div>
    </>
  );
};
