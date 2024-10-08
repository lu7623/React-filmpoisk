import styles from './index.module.css';

import { filmpoiskAPI } from '../../api/services/filmpoiskAPI';
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { GENRES, QueryParams, ShortMovieInfo, YEARS } from '../../api/types';
import { FiltersPanel } from '../../components/FiltersPanel/FiltersPanel';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import { Loader } from '../../components/Loader/Loader';

export const FilmsPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const startState: QueryParams = { page: 1 };

  if (searchParams.has('release_year'))
    startState.release_year = searchParams.get(
      'release_year'
    ) as keyof typeof YEARS;

  if (searchParams.has('genre'))
    startState.genre = searchParams.get('genre') as keyof typeof GENRES;

  const [search, setSearch] = useState<QueryParams>(startState);
  const { data, isLoading, isFetching } =
    filmpoiskAPI.useGetFilmsSearchQuery(search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      let updatedValue = { title: event.target.value };
      setSearch((prev) => ({
        ...prev,
        ...updatedValue,
      }));
    } else {
      const state = { ...search };
      delete state.title;
      setSearch(() => ({
        ...state,
      }));
    }
  };
  const debounced = useDebounce(handleChange, 1000);

  const handleSelectYears = (val: keyof typeof YEARS) => {
    if (val !== '0') {
      setSearchParams((params) => {
        params.set('release_year', val);
        return params;
      });
      let updatedValue = { release_year: val as keyof typeof YEARS };
      setSearch((prev) => ({
        ...prev,
        ...updatedValue,
      }));
    } else {
      setSearchParams((params) => {
        params.delete('release_year');
        return params;
      });

      const state = { ...search };
      delete state.release_year;
      setSearch(() => ({
        ...state,
      }));
    }
  };
  const handleSelectGenres = (val: keyof typeof GENRES) => {
    if (val !== '0') {
      setSearchParams((params) => {
        params.set('genre', val);
        return params;
      });
      let updatedValue = { genre: val as keyof typeof GENRES };
      setSearch((prev) => ({
        ...prev,
        ...updatedValue,
      }));
    } else {
      setSearchParams((params) => {
        params.delete('genre');
        return params;
      });
      const state = { ...search };
      delete state.genre;
      setSearch(() => ({
        ...state,
      }));
    }
  };

  const prevPage = () => {
    if (search.page && search.page > 1) {
      let updatedValue = { page: search.page - 1 };
      setSearch((prev) => ({
        ...prev,
        ...updatedValue,
      }));
    } else return;
  };
  const nextPage = () => {
    let maxPage = (data && data.total_pages) || 1;
    if (search.page) {
      if (search.page < maxPage) {
        let updatedValue = { page: search.page + 1 };
        setSearch((prev) => ({
          ...prev,
          ...updatedValue,
        }));
      }
    } else {
      let updatedValue = { page: 2 };
      setSearch((prev) => ({
        ...prev,
        ...updatedValue,
      }));
    }
  };
  return (
    <>
      <main className={styles.background}>
        <FiltersPanel
          callbackYears={handleSelectYears}
          callbackGenres={handleSelectGenres}
        />
        <div className={styles.cardList}>
          <Input callback={debounced} placeholder="Название фильма" />
          {isLoading || isFetching ? (
            <div className={styles.load}>
              <Loader />
            </div>
          ) : data && data.search_result.length > 0 ? (
            data.search_result.map((film: ShortMovieInfo) => (
              <Card key={film.id} filmInfo={film} />
            ))
          ) : (
            <div className={styles.notFound}>
              <p className={styles.notFoundMsg1}>Фильмы не найдены</p>
              <p className={styles.notFoundMsg2}>
                Измените запрос и попробуйте снова
              </p>
            </div>
          )}
          <Pagination
            page={search.page || 1}
            maxPage={(data && data.total_pages) || 1}
            moveLeft={prevPage}
            moveRight={nextPage}
          />
        </div>
      </main>
    </>
  );
};
