import { Actor } from '../../api/types';
import styles from './styles.module.css';

export default function ActorsPanel({ actors }: { actors: Actor[] }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <h3 className={styles.title}>Актёры</h3>
        <div className={styles.actorsPanel}>
          {actors.map((actor) => {
            return (
              <div className={styles.actorContainer}>
                <div
                  className={styles.imgContainer}
                  style={{ backgroundImage: `url(${actor.photo})` }}
                ></div>
                <p className={styles.name}>{actor.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
