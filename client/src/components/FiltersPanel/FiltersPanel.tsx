import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { GENRES, YEARS } from '../../api/types';

type yearsOption = keyof typeof YEARS;
type genresOption = keyof typeof GENRES;

type FiltersProps = {
  callbackYears: (val: yearsOption) => void;
  callbackGenres: (val: genresOption) => void;
};

export const FiltersPanel: FC<FiltersProps> = ({
  callbackYears,
  callbackGenres,
}) => {
  const inputYearRef = useRef<HTMLInputElement>(null);
  const inputGenreRef = useRef<HTMLInputElement>(null);
  let [searchParams] = useSearchParams();
  const [showYears, setShowYears] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  let checkedYear: yearsOption, checkedGenre: genresOption;

  useEffect(() => {
    if (searchParams.has('release_year')) {
      checkedYear = searchParams.get('release_year') as yearsOption;
      inputYearRef.current && (inputYearRef.current.value = YEARS[checkedYear]);
    }
    if (searchParams.has('genre')) {
      checkedGenre = searchParams.get('genre') as genresOption;
      inputGenreRef.current &&
        (inputGenreRef.current.value = GENRES[checkedGenre]);
    }
  }, []);

  return (
    <>
      <section className={styles.filterContainer}>
        <h3 className={styles.title}>Фильтр</h3>
        <div className={styles.selectItem}>
          <p className={styles.variant}>Жанр</p>
          <input
            onClick={() => setShowGenres(!showGenres)}
            className={`${styles.select} ${showGenres ? styles.btnOpen : styles.btnClose}`}
            ref={inputGenreRef}
            placeholder="Выберите жанр"
          />
          {showGenres && (
            <div className={styles.optionContainer}>
              {Object.keys(GENRES).map((genre) => (
                <div
                  key={genre}
                  onClick={() => {
                    setShowGenres(false);
                    callbackGenres(genre as genresOption);
                    inputGenreRef.current &&
                      (inputGenreRef.current.value =
                        GENRES[genre as genresOption]);
                  }}
                  className={styles.option}
                >
                  {GENRES[genre as genresOption]}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectItem}>
          <p className={styles.variant}>Год выпуска</p>
          <input
            onClick={() => setShowYears(!showYears)}
            className={`${styles.select} ${showYears ? styles.btnOpen : styles.btnClose}`}
            ref={inputYearRef}
            placeholder="Выберите год"
          />
          {showYears && (
            <div className={styles.optionContainer}>
              {Object.keys(YEARS).map((year) => (
                <div
                  key={year}
                  onClick={() => {
                    setShowYears(false);
                    callbackYears(year as yearsOption);
                    inputYearRef.current &&
                      (inputYearRef.current.value = YEARS[year as yearsOption]);
                  }}
                  className={styles.option}
                >
                  {YEARS[year as yearsOption]}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
