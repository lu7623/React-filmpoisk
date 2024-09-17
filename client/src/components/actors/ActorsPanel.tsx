import { FC } from 'react';
import { Actor } from '../../api/types';
import styles from './styles.module.css';

type ActorProps = {
  actors: Actor[];
};

export const ActorsPanel: FC<ActorProps> = ({ actors }) => {
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
};
