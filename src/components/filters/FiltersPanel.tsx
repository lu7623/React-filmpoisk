import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

const GENRES = {
  '0': 'Не выбран',
  comedy: 'Комедия',
  drama: 'Драма',
  action: 'Боевик',
  thriller: 'Триллер',
  horror: 'Ужасы',
  family: 'Семейный',
  cartoon: 'Анимированный',
  fantasy: 'Фэнтези',
  romance: 'Романтика',
  adventure: 'Приключения',
  musical: 'Мьюзикл',
  war: 'Военный',
};

const YEARS = {
  '0': 'Не выбран',
  '2009': '2009',
  '2008': '2008',
  '2007': '2007',
  '2006': '2006',
  '1990-2005': '1990-2005',
  '1950-1989': '1950-1989',
};

type yearsOption = keyof typeof YEARS;
type genresOption = keyof typeof GENRES;

export default function FiltersPanel({
  callbackYears,
  callbackGenres,
}: {
  callbackYears: (val: yearsOption) => void;
  callbackGenres: (val: genresOption) => void;
}) {
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
            onClick={() => setShowGenres(true)}
            style={
              showGenres
                ? {
                    background: "url('/Icons/select-icon.svg') no-repeat 340px",
                  }
                : {
                    background:
                      "url('/Icons/arrow-square-down.svg') no-repeat 340px",
                  }
            }
            className={styles.select}
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
            onClick={() => setShowYears(true)}
            style={
              showGenres
                ? {
                    background: "url('/Icons/select-icon.svg') no-repeat 340px",
                  }
                : {
                    background:
                      "url('/Icons/arrow-square-down.svg') no-repeat 340px",
                  }
            }
            className={styles.select}
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
}
