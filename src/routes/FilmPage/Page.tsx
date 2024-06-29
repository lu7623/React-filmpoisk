
import styles from './index.module.css'
import { filmpoiskAPI } from '../../services/filmService';
import { useParams } from 'react-router-dom';

export default function FilmPage() {
  const { filmId } = useParams();
  const { data } = filmpoiskAPI.useGetFilmByIdQuery(filmId ? filmId : '');
  return (
    <>
      <div className={styles.root}>
      </div>
      <h1>I am film FilmPage</h1>
      <div>{data?.title}</div>
      <div>{data?.description }</div>
    </>
  )
}


