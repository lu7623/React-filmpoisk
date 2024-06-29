import styles from './index.module.css';
import { filmpoiskAPI } from '../../services/filmService';
import { useParams } from 'react-router-dom';
import ActorsPanel from '../../components/actors/ActorsPanel';
import FilmDetails from '../../components/details/FilmDetails';

export default function FilmPage() {
  const { filmId } = useParams();
  const { data } = filmpoiskAPI.useGetFilmByIdQuery(filmId ? filmId : '');
  return (
    <>
      <main className={styles.background}>
        {data && (
          <>
            <FilmDetails film={data} />
            <ActorsPanel actors={data.actors} />
          </>
        )}
      </main>
    </>
  );
}
