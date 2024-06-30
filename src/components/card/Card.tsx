import { ShortMovieInfo } from '@/api/types';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function Card({ filmInfo }: { filmInfo: ShortMovieInfo }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => navigate(`/film/${filmInfo.id}`)}
      >
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${filmInfo.poster})` }}
        ></div>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>{filmInfo.title}</h3>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Жанр</p>
            <p className={styles.infoText}>{filmInfo.genre}</p>
          </div>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Год выпуска</p>
            <p className={styles.infoText}>{filmInfo.release_year}</p>
          </div>
          <div className={styles.infoLine}>
            <p className={styles.tags}>Описание</p>
            <p className={styles.infoText}>{filmInfo.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
