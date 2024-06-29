import styles from './styles.module.css';

export default function FiltersPanel() {
  return (
    <>
      <section className={styles.filterContainer}>
        <h3>Фильтр</h3>
        <div>
          <p>Жанр</p>
        </div>
        <div>
          <p>Год выпуска</p>
        </div>
      </section>
    </>
  );
}
