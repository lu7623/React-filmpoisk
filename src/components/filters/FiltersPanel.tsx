import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
//import { GENRES, YEARS } from '@/api/types';
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

export default function FiltersPanel({
  callbackYears,
  callbackGenres,
}: {
  callbackYears: (val: React.ChangeEvent<HTMLSelectElement>) => void;
  callbackGenres: (val: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  let [searchParams] = useSearchParams();
  let checkedYear: keyof typeof YEARS, checkedGenre: keyof typeof GENRES;
  if (searchParams.has('release_year'))
    checkedYear = searchParams.get('release_year') as keyof typeof YEARS;
  if (searchParams.has('genre'))
    checkedGenre = searchParams.get('genre') as keyof typeof GENRES;
  return (
    <>
      <section className={styles.filterContainer}>
        <h3>Фильтр</h3>
        <div>
          <p>Жанр</p>
          <select onChange={callbackGenres}>
            {Object.keys(GENRES).map((genre) => (
              <option
                key={genre}
                selected={checkedGenre == genre}
                value={genre}
              >
                {GENRES[genre as keyof typeof GENRES]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Год выпуска</p>
          <select onChange={callbackYears}>
            {Object.keys(YEARS).map((year) => (
              <option key={year} selected={checkedYear == year} value={year}>
                {YEARS[year as keyof typeof YEARS]}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
}
