import styles from './styles.module.css';
import { FC } from 'react';

type PaginationProps = {
  page: number;
  maxPage: number;
  moveLeft: () => void;
  moveRight: () => void;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  maxPage,
  moveLeft,
  moveRight,
}) => {
  return (
    <>
      <nav className={styles.navContainer}>
        <button
          className={styles.button}
          disabled={page === 1}
          onClick={moveLeft}
        >
          <img
            src="/Icons/arrow-left.svg"
            width={16}
            height={20}
            className={styles.img}
          />
        </button>

        <span>{page}</span>
        <button
          className={styles.button}
          disabled={page === maxPage}
          onClick={moveRight}
        >
          <img
            src="/Icons/arrow-right.svg"
            width={16}
            height={20}
            className={styles.img}
          />
        </button>
      </nav>
    </>
  );
};
