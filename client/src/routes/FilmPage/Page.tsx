import styles from './index.module.css';
import { filmpoiskAPI } from '../../api/services/filmpoiskAPI';
import { useParams } from 'react-router-dom';
import { ActorsPanel } from '../../components/Actors/ActorsPanel';
import { FilmDetails } from '../../components/FilmDetails/FilmDetails';
import { Loader } from '../../components/Loader/Loader';

export const FilmPage = () => {
  const { filmId } = useParams();
  const { data, isLoading, isFetching } = filmpoiskAPI.useGetFilmByIdQuery(
    filmId ? filmId : ''
  );
  return (
    <>
      <main className={styles.background}>
        {isLoading || isFetching ? (
          <div className={styles.load}>
            <Loader />
          </div>
        ) : (
          data && (
            <>
              <FilmDetails film={data} />
              <ActorsPanel actors={data.actors} />
            </>
          )
        )}
      </main>
    </>
  );
};
