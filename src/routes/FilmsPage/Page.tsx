import styles from './index.module.css';
import { filmpoiskAPI } from '../../services/filmService';
import Loader from '../../components/loader/Loader';

export default function FilmsPage() {
  const { data } = filmpoiskAPI.useGetFilmsSearchQuery({ limit: 3 });

  return (
    <>
      <Loader />
      <div className={styles.root}></div>
      <h1>I am film FilmPage</h1>
      {data &&
        data.search_result.map((film) => {
          return (
            <>
              <div>{film.title}</div>
              <div>{film.genre}</div>
              <div>{film.description}</div>
            </>
          );
        })}
    </>
  );
}
