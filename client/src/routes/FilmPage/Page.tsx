import styles from './index.module.css';
import { filmpoiskAPI } from '../../api/services/filmService';
import { useParams } from 'react-router-dom';
import { ActorsPanel } from '../../components/actors/ActorsPanel';
import { FilmDetails } from '../../components/details/FilmDetails';
import { Loader } from '../../components/loader/Loader';

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
