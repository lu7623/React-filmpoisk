import styles from './index.module.css';
import { filmpoiskAPI } from '../../services/filmService';
import { useState } from 'react';
import { IQueryParams } from '../../api/types';
import FiltersPanel from '../../components/filters/FiltersPanel';
import Card from '../../components/card/Card';
import useDebounce from '../../hooks/useDebounce';
import Input from '../../components/input/Input';

export default function FilmsPage() {
  const [search, setSearch] = useState<IQueryParams>({});
  const { data } = filmpoiskAPI.useGetFilmsSearchQuery(search);

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

  const debounced = useDebounce(handleChange, 300);
  return (
    <>
      <main className={styles.background}>
        <FiltersPanel />
        <div className={styles.cardList}>
          <Input callback={debounced} />
          {data &&
            data.search_result.map((film) => (
              <Card key={film.id} filmInfo={film} />
            ))}
        </div>
      </main>
    </>
  );
}
