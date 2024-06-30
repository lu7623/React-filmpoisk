import { ShortMovieInfo } from '@/api/types';
import styles from './styles.module.css';
import Score from '../score/Score';

export default function FilmDetails({ film }: { film: ShortMovieInfo }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${film.poster})` }}
        ></div>
        <div className={styles.infoContainer}>
          <Score />
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
}
