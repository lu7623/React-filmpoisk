import styles from './index.module.css';
import { filmpoiskAPI } from '../../services/filmService';
import FiltersPanel from '../../components/filters/FiltersPanel';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';

export default function FilmsPage() {
  const { data } = filmpoiskAPI.useGetFilmsSearchQuery({});

  return (
    <>
      <main className={styles.background}>
        <FiltersPanel />
        <div className={styles.cardList}>
          <Input />
          {data &&
            data.search_result.map((film) => (
              <Card key={film.id} filmInfo={film} />
            ))}
        </div>
      </main>
    </>
  );
}
