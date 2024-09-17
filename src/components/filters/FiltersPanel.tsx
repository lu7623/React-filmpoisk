import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import { GENRES, YEARS } from '@/api/types';
import { FC } from 'react';

type FiltersProps = {
  callbackYears: (val: React.ChangeEvent<HTMLSelectElement>) => void;
  callbackGenres: (val: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const FiltersPanel: FC<FiltersProps> = ({
  callbackYears,
  callbackGenres,
}) => {
  let [searchParams] = useSearchParams();
  let checkedYear: keyof typeof YEARS, checkedGenre: keyof typeof GENRES;

  if (searchParams.has('release_year'))
    checkedYear = searchParams.get('release_year') as keyof typeof YEARS;

  if (searchParams.has('genre'))
    checkedGenre = searchParams.get('genre') as keyof typeof GENRES;
  return (
    <>
      <section className={styles.filterContainer}>
        <h3 className={styles.title}>Фильтр</h3>
        <div className={styles.selectItem}>
          <p className={styles.variant}>Жанр</p>
          <select onChange={callbackGenres} className={styles.select}>
            {Object.keys(GENRES).map((genre) => (
              <option
                key={genre}
                selected={checkedGenre == genre}
                value={genre}
                className={styles.option}
              >
                {GENRES[genre as keyof typeof GENRES]}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectItem}>
          <p className={styles.variant}>Год выпуска</p>
          <select onChange={callbackYears} className={styles.select}>
            {Object.keys(YEARS).map((year) => (
              <option
                key={year}
                selected={checkedYear == year}
                value={year}
                className={styles.option}
              >
                {YEARS[year as keyof typeof YEARS]}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};
